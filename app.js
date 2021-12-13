$(document).ready(function () {
    var fetch = new XMLHttpRequest();

    fetch.open("GET", "vpn.json", true);
    fetch.onload = function () {
        console.log("loading");
        if (this.status == 200) {
            var elem = JSON.parse(this.responseText);
            var output = "";
            for (var i in elem) {
                output += `
                    <div class="col-12 col-md-4 mb-3">
                        <div class="action-card shadow">
                            <p class="mb-0">
                                <code>
                                ${elem[i].email}
                                </code>
                            </p>
                            <p class="mb-0">
                                <code>
                                ${elem[i].password}
                                </code>
                            </p>
                            <p class="mb-0">
                                <code>
                                ${elem[i].activation_code}
                                </code>
                            </p>
                        </div>
                    </div>`;
            }
            $("#vpnDiv").html(output);
            console.log(output);
        } else {
            console.log("error");
        }
    };
    fetch.send();
});
