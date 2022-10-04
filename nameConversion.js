const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const kebabCase = document.querySelector("#kebab-case");
const snakeScreamingCase = document.querySelector("#screaming-snake-case");
const kebabScreamingCase = document.querySelector("#screaming-kebab-case");


const btn = document.querySelector("#convert-btn");
const input = document.querySelector("input");



function caseConverter() {
    let str = input.value;
    let strRes = str.split(/[\-!$%\^&*@#()_+|~=`{}[\]:";'<>?,./\\]|\s/).filter(item => item !== "");

    // kebab case converter
    function kebabCaseConverter() {
        kebabCase.textContent = strRes.join("-");
        
        // screaming case
        let screamKebab = strRes.map(item => item.toUpperCase());
        kebabScreamingCase.textContent = screamKebab.join("-");
    }

    // snake case converter
    function snakeCaseConverter() {
        snakeCase.textContent = strRes.join("_");
        // screaming case
        let screamKebab = strRes.map(item => item.toUpperCase());
        snakeScreamingCase.textContent = screamKebab.join("_");
    }

    // pascal case converter
    function pascalCaseConverter() {
        let pascalStr = strRes.map(item => item[0].toUpperCase() + item.substring(1));
        pascalCase.textContent = pascalStr.join("");
    }

    // camel case converter
    function camelCaseConverter() {
        let [first, ...restStr] = strRes;
        let camelStr = restStr.map(item => item[0].toUpperCase() + item.substring(1)).join("");
        camelCase.textContent = first.toLowerCase() + camelStr;
    }

    // Calling converter functions
    camelCaseConverter();
    pascalCaseConverter();
    snakeCaseConverter();
    kebabCaseConverter();
    kebabCaseConverter();
}

btn.addEventListener("click", caseConverter);
