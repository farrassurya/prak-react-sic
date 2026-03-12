export default function HelloWorld(){
    
     const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01",
        usia: 50
    }

    return (
        <div className="card">
            <h1>Hello World</h1>

            <img src="./img/Logo Utama.png" width="100%" height="100%"></img>

            <p>Selamat Belajar ReactJs</p> 
            <hr />
            <GreetingBinjai/>
            <hr />
            <QuoteText/>
            <UserCard 
	            nama="Farrassurya" 
	            nim="2457301078"
	            tanggal={new Date().toLocaleDateString()}
	          />
            <UserCard 
	            nama="Rass" 
	            nim="2457301078"
	            tanggal="2026/12/03"
	          />
            <UserCard {...propsUserCard}/>
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai - </small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div className="card">
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div className="card">
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
            <p>Usia: {props.usia}</p>
        </div>
    )
}