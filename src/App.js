import { useEffect, useState } from 'react';
import './App.css';

const ImageComponent = ({ url, totalIndex, index }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

      <img style={{ width: "500px", height: "400px" }} src={url}></img>

      <span>Fotograf {index + 1}  / {totalIndex} </span>
    </div>
  )
}

function App() {

  const [gorsel, setGorsel] = useState([
    { category: "manzara", url: 'https://media.istockphoto.com/id/517188688/tr/foto%C4%9Fraf/mountain-landscape.jpg?s=612x612&w=0&k=20&c=KpANCuD2dFxKw6Qy6XfMXpTHiZcsprOf0LRm2t4K9kM=' },
    { category: "manzara", url: 'https://i0.wp.com/mediatrend.mediamarkt.com.tr/wp-content/uploads/2017/02/2017_subat_03.jpg?ssl=1' },
    { category: "manzara", url: 'https://media.istockphoto.com/id/1297349747/tr/foto%C4%9Fraf/t%C3%BCrkiyede-botan-kanyonu-%C3%BCzerinde-u%C3%A7an-s%C4%B1cak-hava-balonlar%C4%B1.jpg?s=612x612&w=0&k=20&c=cB1OwAy1ndPfcjp_Mt7n0rLub2hiSzgMj-qBXHSrprU=' },
    { category: 'hayvan', url: 'https://cdn1.ntv.com.tr/gorsel/W0BcorXAkE2ZbENzqa_vjg.jpg?width=1000&mode=crop&scale=both' },
    { category: 'hayvan', url: 'https://i.pinimg.com/474x/17/4c/7a/174c7aa2a5007811cab2551ab528e891.jpg' },
    { category: 'hayvan', url: 'https://image.hurimg.com/i/hurriyet/75/0x0/5efd799b45d2a04ed8f63fae.jpg' },
    { category: 'hayvan', url: 'https://fotolifeakademi.com/uploads/2020/04/hayvan-fotograflari-nasil-cekilir.jpg' },
    { category: 'ev', url: 'https://www.bilkaprefabrik.com/wp-content/uploads/2020/02/celik-ev-fiyatlari.jpg' },
    { category: 'ev', url: 'https://prefabrikevfiyatlari.com/cdn/shop/products/105m2_934x700.jpg?v=1632922782' },
    { category: 'ev', url: 'https://static.wixstatic.com/media/e41655_5b4009df9e91415f8a00f4d0d4be10bc~mv2.png/v1/fill/w_640,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e41655_5b4009df9e91415f8a00f4d0d4be10bc~mv2.png' },
    { category: 'araba', url: 'https://www.dekoros.com/wp-content/uploads/2022/02/F1600-1.jpg' },
    { category: 'araba', url: 'https://img-s1.onedio.com/id-5406e18bc62a80e52af57780/rev-0/raw/s-2075e5a29881f19f4183ac2ecf70e5d5ccba7b14.jpg' },
    { category: 'araba', url: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/10/27/thumbs_b_c_2d9f7855d4e857c147d33f95dcc377c4.jpg?v=112801' },
    { category: 'programlamaDilleri', url: 'https://novasta.com.tr/wp-content/uploads/2022nin-populer-programlama-dilleri-novasta-1.jpg' },
    { category: 'programlamaDilleri', url: 'https://hypernet.com.tr/dimg/icerik/293732243425900284632.png' },
    { category: 'programlamaDilleri', url: 'https://media.backlinks.name//contents//backlink-yazilimdilleri-2019-01-06-08-27-47.jpg' }]

  )

  const [sayac, setSayac] = useState(0)


  const kategoriSecici = (gorselDizi, kategori) => {
 
    let randomNumbers=[]
    let randomSayi;
    do {
    randomSayi=Math.floor(Math.random() * gorselDizi.length)
    let kontrol=randomNumbers.includes(randomSayi)
      if(!kontrol){
        randomNumbers.push(randomSayi)
      }

    } while (randomNumbers.length<gorselDizi.length); 
 

    const kategoriyeGoreSecim = gorselDizi.filter(objeler => {
      if (kategori === '') {return objeler
      } return objeler.category === kategori

    })
    // console.log(kategoriyeGoreSecim)
    const urller = kategoriyeGoreSecim.map(urller => {return urller.url})
    console.log(urller)
    const randUrl=randomNumbers.map(numbers=>{return urller[numbers] })
    if(kategori === '') {
      console.log(randUrl)
      return randUrl
    }
    return urller
  }



  const [kategori, setKategori] = useState('')

  useEffect(() => {
    setSayac(0)
  }, [kategori])

  return (
    <div >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "flex", paddingTop: "5%", }}>
          <select onChange={(e) => setKategori(e.target.value)}>
            <option value="">Kategori Seç</option>
            <option value="manzara">Manzara</option>
            <option value="hayvan">Hayvan</option>
            <option value="ev">Ev</option>
            <option value="araba">Araba</option>
            <option value="programlamaDilleri">Programlama Dilleri</option>
          </select>
        </div>


        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
          <button style={{ background: "none", border: "none" }} onClick={() => { sayac > 0 ? setSayac(sayac - 1) : setSayac(sayac) }} ><img style={{ width: "50px", rotate: "180deg" }} src='https://cdn-icons-png.flaticon.com/256/32/32213.png'></img>
          </button>

          <ImageComponent url={kategoriSecici(gorsel, kategori)[sayac]} totalIndex={kategoriSecici(gorsel, kategori).length} index={sayac} />

          <button style={{ background: "none", border: "none" }} onClick={() => { sayac < kategoriSecici(gorsel, kategori).length - 1 ? setSayac(sayac + 1) : setSayac(sayac) }}><img style={{ width: "50px" }} src='https://cdn-icons-png.flaticon.com/256/32/32213.png'></img>
          </button>

        </div>
      </div>


    </div>
  );
}




export default App;
