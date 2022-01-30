$(document).ready(function () {


    $("#addFilterBtn").click(function () {
        let $txt = $("#addFilterTxt");
        let filter = $txt.val();
        $txt.val('');
        $(`
              <div class = "chip" tabindex = "-1">
                <span>
                  ${filter}
                </span>
                <button title="Remove chip" aria-label="Remove chip" type = "button" onclick = "$(this).parent().remove()">
                  <i class = "material-icons">cancel</i>
                </button>
              </div>`).appendTo("#filterChipsContainer");;
    });


});