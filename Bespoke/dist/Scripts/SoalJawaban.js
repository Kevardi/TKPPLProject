var kumpulanSoalJawaban = [
    ["Tempat kita bisa melihat S ditengah", "KASUR"],
    ["Yang bisa menangkap penjahat di malam hari", "BANGGA"],
    ["Ketika mandi biasanya orang menggosok", "PIPI"],
    ["Bagian gigi yang paling belakang adalah", "DRUMMER"],
    ["Untuk menyalakan lampu kita harus tekan", "SEKALI"],
    ["Biasa Ayah Pulang Kantor Langsung", "LEWATPINTU"],
    ["Ada Ayah, Ibu, Kakek, Nenek Tinggal di", "HITUNG"],
    ["Anda datang terlambat maka anda", "SELAMAT"],
    ["Perbedaan kambing dengan domba", "DIKIT"],
    ["Kita melihat bintang di", "PUNDAK"],
    ["Datang ga di undang pulang ga Izin", "BRENGSEK"],
    ["Orang yang jarang pergi kemana-mana disebut", "KIPER"],
    ["Apakah yang dilakukan orang ketika sakit", "PULANG"],
    ["Bisa ditarik tapi tidak bisa dilihat", "KUPING"],
    ["Orang apa yang dibacok gak mempan", "ORANGGAKKENA"],
    ["Yang dicari orang saat di pasar", "DISKON"],
    ["Si Boy anak", "JALANAN"],
    ["Kita Bisa melihat wajah kita sendiri di", "SIM A"],
    ["Dapat Bergerak Sendiri tanpa disuruh", "ROBOH"],
    ["Kakak mengantar Adik sekolah sampai", "CAPEK"],
    ["Makanan yang dibungkus daun pisang", "LONTONG"],
    ["Teman tarzan itu", "KAMU"],
    ["Tempat ngopi disebut", "KALI"],
    ["Siapakah Bu RT", "BAWAHANPAKCAMAT"],
    ["Jadi pak RT tinggal dirumah pak camat karena dia", "ANAKNYA"],
    ["Siapakah suami bu RT", "YAPAKRT"],
    ["Bola apa yang mirip kucing", "BOLAEMON"],
    ["Gajah apa yang belalainya pendek", "GAJAHPESEK"],
    ["Ibu yang baik harusnya", "IBUKITA"],
    ["Burung terbang menggunakan", "SEMANGAT"],
    ["Siapakah istri pak camat", "BUCAMAT"],
    ["Burung terbang dengan", "SEMAUNYA"],
    ["Ketika berperang tentara membawa", "SEPATUNYA"],
    ["Kebaikan orang bisa dilihat dari", "ANAKNYA"],
    ["Ketika tidur orang biasanya", "MENDINGAN"],
    ["Pantai tempat orang", "RAMAI"],
    ["Jika kita kepasar biasanya kita bertemu", "TETANGGA"],
    ["Malam apa yang paling indah", "MALAMARKAMU"],
    ["Apa yang paling ditakuti anak SD", "DISUNTIK"],
    ["SMA adalah sekolah menegah", "AMAN"],
    ["Sekarang pak RT sudah jadi camat, lalu Bu RT tinggal", "RUMAHPAKCAMAT"],
    ["Apakah yang paling enak dipencet", "JERAWAT"],
    ["Sandal apa yang paling enak", "SANDALTERASI"],
    ["Temannya nobita", "SEDIKIT"],
    ["Kebiasaan apa yang dilakukan ketika minum kopi", "SRUPUT"],
    ["Yang membantu dokter", "SEMBUH"],
    ["Apa yang dialakukan ibu-ibu ketika malam hari bersama suaminya", "TIDUR"],
    ["Batik merupakan produk asli dari", "MANUSIA"],
    ["Ayah tidak mau makan nasi lagi karena", "KEMAKAN"],
    ["Teman yang susah ditemuin biasanya lagi", "PDKT"],
    ["Apakah yang dilakukan ketika masuk sekolah", "MINTAANTER"],
    ["Orang bingung mikir", "SANGATLAMA"],
    ["Buah apa yang dibawa pas lagi main kerumah pacar", "APEL"],
    ["Ayam apa yang gede banget", "AYAMSEMESTA"],
    ["Pada film hantu, yang membuat menakutkan adalah", "KRIYEK"],
    ["Buah jatuh tak jauh dari", "BATANGNYA"],
    ["Motor bocor biasanya di", "BANNYA"],
    ["Sepeda motor bisa berjalan karna rodanya berbentuk", "BIASA"],
    ["Pak RT bisa terbang, Pak RT punya", "TIKET"],
    ["Apa yang ada diujung laut", "HURUFT"],
    ["Yang Mengemudikan Kapal Namanya", "BERBEDA"],
    ["Pak Tani Menanam padi di", "LEWAT"],
    ["Kotak Apa yang ngga bisa dipindahi", "PINALTI"],
    ["Ada Api Pasti Ada", "ANYA"],
    ["Rizky Febian Lahir Di", "GENDONG"],
    ["Mobil Tidak Bisa Jalan Maju Sebab", "PARKIR"],
    ["Seruling Bila di Tiup Akan", "BASAH"],
    ["Orang Kedinginan Mencari", "REMOTEAC"],
    ["Tinky Winky, Dipsey, Laa Laa, Poo adalah nama nama", "TENARSEKALI"],
    ["Ikan apa yang bisa Terbang", "LELELAWAR"],
];

function AcakSoalJawaban() {
    var soalJawaban = [];
    var i, j, x;

    for (i = 0; i < 10; i++) {
        x = Math.floor(Math.random() * (kumpulanSoalJawaban.length-1));
        ketemu = false;

        if (soalJawaban.length > 0) {
            for (j = 0; j < soalJawaban.length; j++) {
                if (soalJawaban[j] == x) {
                    ketemu = true;
                    break;
                }

            }

            if (!ketemu)
                soalJawaban.push(x);
        }
        else
            soalJawaban.push(x);
    }

    return soalJawaban;
}