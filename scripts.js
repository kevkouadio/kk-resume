document.getElementById('downloadBtn').addEventListener('click', function () {
    var element = document.getElementById('resume'); // You can specify a more specific element if needed
    var opt = {
        margin:       0.3,
        filename:     'Resume-Kouassi_Kevin_KOUADIO.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
});
