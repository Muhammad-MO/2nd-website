
  var app = new Vue({
    el: '#app',
    mounted() {
    },
    data: function () {
        return {
            spoonacularApiKey: '478fd21148ea49e49a273fb374b1c006', 
            servings: 2,
            viewStyle: 1,
            ingredients: '',
        };
    },
    methods: {
        previewPriceWidget() {
            var postContent = this.ingredients;

            let self = this;
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    self.previewWidgetCallback(xmlHttp.responseText);
                }
            }
            xmlHttp.open("POST", 'https://api.spoonacular.com/recipes/visualizePriceEstimator?apiKey=' + this.spoonacularApiKey, true);
            xmlHttp.send('defaultCss=true&servings=' + this.servings + '&mode=' + this.viewStyle + '&ingredientList=' + postContent);
        },

        previewWidgetCallback(response) {
            var el = document.createElement("script");
            el.setAttribute("type", "text/javascript");
            el.setAttribute("src", "https://code.jquery.com/jquery-1.9.1.min.js");
            document.getElementById('previewWidget').contentDocument.head.appendChild(el);

            el = document.createElement("script");
            el.setAttribute("type", "text/javascript");
            el.setAttribute("src", "https://spoonacular.com/application/frontend/js/jquery.canvasjs.min");
            document.getElementById('previewWidget').contentDocument.head.appendChild(el);

            // wait until jquery is loaded
            setTimeout(function () {
                var el = document.createElement("script");
                el.setAttribute("type", "text/javascript");
                el.setAttribute("src", "https://spoonacular.com/application/frontend/js/ingredientWidget.min.js?c=1");
                document.getElementById('previewWidget').contentDocument.body.appendChild(el);

                var iframeDocument = document.getElementById('previewWidget').contentDocument;
                iframeDocument.open();
                iframeDocument.write(response);
                iframeDocument.close();
            }, 1000);
        },
    },
});