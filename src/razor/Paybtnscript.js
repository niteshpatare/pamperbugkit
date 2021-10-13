export const appendScript = (scriptToAppend, elid, datapaymentbuttonid) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    script.async = true;
    script.setAttribute("data-payment_button_id", datapaymentbuttonid);
    document.getElementById(elid).appendChild(script);
    return (eid) => {
        document.getElementById(eid).removeChild(script);
    }
}

