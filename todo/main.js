function formHandler(e) {
  e.preventDefault();

  var tbody = document.querySelector("tbody");

  var values = [];
  for (var element of e.target.elements) {
    if (element.nodeName != "BUTTON") {
      values.push(element.value);
    }
  }
  console.log(values);

  function create(arr) {
    console.log(arr[2]);
    if (arr[2]) {
      return (
        "<tr>  <td>" +
        arr[0] +
        "</td>  <td>" +
        arr[1] +
        "</td>  <td>" +
        arr[2] +
        "</td>   </tr>"
      );
    } else {
      return (
        "<tr>  <td>" +
        arr[0] +
        "</td>  <td>" +
        arr[1] +
        "</td>  <td>" +
        "joy berilmadi" +
        "</td>   </tr>"
      );
    }
  }

  var result = create(values);

  tbody.innerHTML += result;
}
