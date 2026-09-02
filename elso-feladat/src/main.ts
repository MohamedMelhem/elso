interface Adat {
  szoveg : string;
  datum : Date;
  szam : number;
  munka : string;
}


let adatok : Adat[] = [];

async function AdatokBetoltese() {
  const response = await fetch("https://retoolapi.dev/3U6bLA/data")
  adatok = await response.json();

  console.log(adatok);
  talbaMegjelenitese();
}


function talbaMegjelenitese() {
    const tabla = document.getElementById("tabla");


    tabla.innerHTML = "";

    adatok.forEach((adat) => {
        tabla.innerHTML += `
            <tr>
                <td>${adat.szoveg}</td>
                <td>${adat.datum}</td>
                <td>${adat.szam}</td>
                <td>${adat.munka}</td>
                <td>
                    <button class="btn btn-danger">
                        Törlés
                    </button>
                </td>
            </tr>
        `;
    });

}

AdatokBetoltese();
