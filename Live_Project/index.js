let arr=[
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FParent-Page_ac0201bb-8f51-447c-b6e0-4404786076a2.jpg%3Fv%3D1680364145&w=256&q=75",
        title1 : "Nothing Else Matter",
        title2 : "LongWear Lipstick",
        title3 : "12 Shades",
        price : "Rs. 599",
        mrp : "479"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75",
        title1 : "Contour de Face Eyes",
        title2 : "Face Pallette",
        title3 : "3 Shades",
        price : "Rs. 1099",
        mrp : "879"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FDreamCoverSpf15MattifyingCompactPDPImagesparent1stcard.jpg%3Fv%3D1680623338&w=256&q=75",
        title1 : "Dream Cover SPF15",
        title2 : "Mattifying Compact",
        title3 : "3 Shades",
        price : "Rs. 549",
        mrp : "439"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fmoisturiser.jpg%3Fv%3D1626968292&w=256&q=75",
        title1 : "Aquaholic Priming",
        title2 : "Moisturizer",
        title3 : "No Shades",
        price : "Rs. 649",
        mrp : "519"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F01_332ccf25-8e0f-4b40-be7b-3e322eeeb653.jpg%3Fv%3D1712590471&w=256&q=75",
        title1 : "Matte Attack Transferproof",
        title2 : "Lipstick",
        title3 : "15 Shades",
        price : "Rs. 749",
        mrp : "599"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F370205924-01_1aef1c2e-8e41-42a2-89c5-70dab3b356ac.jpg%3Fv%3D1698238462&w=256&q=75",
        title1 : "Matte As Hell Crayon",
        title2 : "Lipstick Minits Set of 3",
        title3 : "No Shades",
        price : "Rs. 999",
        mrp : "799"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F07_6fa35950-4830-4e97-80ea-d40f2fb42801.jpg%3Fv%3D1680622820&w=256&q=75",
        title1 : "Ace of Face Foundation",
        title2 : "Stick",
        title3 : "11 Shades",
        price : "Rs. 999",
        mrp : "799"
    },

    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FBaseOfGloryPoreMinimizingPrimerPDPimages1copy.jpg%3Fv%3D1682956017&w=256&q=75",
        title1 : "Base of Glory Pore",
        title2 : "Minimizing Primer",
        title3 : "No Shades",
        price : "Rs. 849",
        mrp : "679"
    },
]

let count = 0;
let n = arr.length;

        const ui = (count) => {
            $("#title1_1").text(arr[count].title1)
            $("#title1_2").text(arr[count].title2)
            $("#title1_3").text(arr[count].title3)
            $("#img1").attr("src", arr[count].img)
            $("#price1").text(arr[count].price)
            $("#mrp1").text(arr[count].mrp)

            $("#title2_1").text(arr[count+1].title1)
            $("#title2_2").text(arr[count+1].title2)
            $("#title2_3").text(arr[count+1].title3)
            $("#img2").attr("src", arr[count+1].img)
            $("#price2").text(arr[count+1].price)
            $("#mrp2").text(arr[count+1].mrp)

            $("#title3_1").text(arr[count+2].title1)
            $("#title3_2").text(arr[count+2].title2)
            $("#title3_3").text(arr[count+2].title3)
            $("#img3").attr("src", arr[count+2].img)
            $("#price3").text(arr[count+2].price)
            $("#mrp3").text(arr[count+2].mrp)

            $("#title4_1").text(arr[count+3].title1)
            $("#title4_2").text(arr[count+3].title2)
            $("#title4_3").text(arr[count+3].title3)
            $("#img4").attr("src", arr[count+3].img)
            $("#price4").text(arr[count+3].price)
            $("#mrp4").text(arr[count+3].mrp)
        }

        $("#next").click(() => {

            if (count <= n - 1) {
                count += 4
            }
            else {
                count = 0
            }


            ui(count)
        })      


        $("#prev").click(() => {

            if (count >= 4) {
                count -= 4
            }
            else {
                count = n - 1
            }


            ui(count)
        })
ui(0)