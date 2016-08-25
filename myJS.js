// JavaScript source code
var number_array = [];
var validFileExtensions = [".txt"];
function find() {
    var textfile = document.getElementById('textfile');
    var showfile = document.getElementById('showfile');
    var file = textfile.files[0];
    var textType = /text.*/;
    if (hasExtension('textfile', validFileExtensions) ){
        var reader = new FileReader();
        reader.onload = function (e) {
            showfile.innerText = reader.result;
            var numbers = reader.result.toString().split("\n");
            var number_list, missing_number,missing_string="";
            for (var i = 0; i < numbers.length; i++) {
                number_list = numbers[i].split(",");
                if (number_list.length > 0) {
                    number_array[i] = number_list;
                    missing_number = findmissing(number_array[i]);
                    missing_string += missing_number +"\n";
                }

            }
            document.getElementById("showmissing").innerText = missing_string
            //alert(number_array.length)
        }
        reader.readAsText(file);

        document.getElementById("result").style.display = "";
    } else {
        showfile.innerText = "Please select a text file!"
    }

}

function findmissing(array) {
    var size, max, min, sum_all=0,sum=0, i;
    max = Math.max.apply(null, array);
    min = Math.min.apply(null, array);
    size = array.length;
    sum_all = (size+1) * (min + max) / 2;
    for( i=0;i<size;i++){ 
        sum += parseInt(array[i]);
        
    }
    return sum_all - sum;
}
function hasExtension(inputID, exts) {
    var fileName = document.getElementById(inputID).value;
    return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};