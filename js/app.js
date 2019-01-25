var prodis = [
    {
        name: "S-I Keperawatan",
        website: "http://stikesicme-jbg.ac.id/s1keperawatan/"
    }, 
    {
        name: "D-IV Bidan Pendidik",
        website: "http://stikesicme-jbg.ac.id/d-iv-bidan-pendidik/"
    }, 
    {
        name: "D-III Analis Kesehatan",
        website: "http://d3-analis.stikesicme-jbg.ac.id/"
    }, 
    {
        name: "D-III Keperawatan",
        website: "http://d3-keperawatan.stikesicme-jbg.ac.id/"
    },
    {
        name: "D-III Kebidanan",
        website: "http://stikesicme-jbg.ac.id/d3kebidanan/"
    }, 
    {
        name: "Profesi Ners",
        website: "http://ners.stikesicme-jbg.ac.id/"
    }
]

angular.module('website', []).controller('ProdiController', function () {
    this.style = {
        'margin-left': '-10vw',
        'margin-right': '-10vw'
    }
    this.prodis = prodis
})