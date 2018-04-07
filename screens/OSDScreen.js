import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
    ScrollView,
    TouchableOpacity,
    Linking,
    Dimensions
} from "react-native";
// import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Button, Icon } from 'native-base'
import CustomHeader from './components/CustomHeader'
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog' 

class OSDScreen extends Component {
    constructor(){
        super();
    }

    static navigationOptions = ({ navigation }) => ({
        title: "OSD HMT-ITB",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/osd.png')}
                style={styles.icon}
            />

    })

    render() {
        return (
            <Container style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight, backgroundColor: 'white'}}>
                <CustomHeader
                    title="OSD HMT-ITB"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Erika" />}
                    ref={(erika) => { this.erika = erika; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: F C G C (2x) {'\n'}
                            C C {'\n'}
                            Pengalaman tak terlupa, waktu aku mahasiswa {'\n'} 
                            F G C {'\n'}
                            Kecantol di Surabaya, janda muda nama Erika {'\n'}
                            C C {'\n'}
                            Erika buka celana, diam-diam main gila {'\n'}
                            F G C {'\n'}
                            Sambil bawa botol fanta, siapa mau boleh coba {'\n'}
                            Reff: {'\n'}
                            C G {'\n'}
                            Oh .... goyang Erika luar biasa {'\n'}
                            C G {'\n'}
                            Oh .... lebar pinggulnya hampir sedepa{'\n'}
                            F C G C {'\n'}
                            Bila disenggolnya celana pasti terbuka {'\n'}
                            F C G C {'\n'}
                            Walau sudah janda sempitnya masih terasa {'\n'}
                            C	C {'\n'}
                            Pagi-pagi Erika mandi, lenggak-Ienggok di pinggir kali {'\n'}
                            F G C {'\n'}
                            Kagetku setengah mati, lihat barang kayak serabi {'\n'}
                            Back to Reff {'\n'}
                            Musik: C F G C (2x) {'\n'}
                            Back to Reff {'\n'}
                            C	C G{'\n'}
                            Ha ha ha ha ... ha hi hi hi hi ... hi anunya kegedean{'\n'}
                            G G C{'\n'}
                            ria ha ha ha ... ha hi hi hi hi ... hi itunya kesempitan{'\n'}
                            C C G{'\n'}
                            Ha ha ha ha ... ha hi hi hi hi ... hi anunya kegedean{'\n'}
                            G	G C{'\n'}
                            Ha ha ha ha ... ha hi hi hi hi ... hi itunya kesempitan{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Waktu Masih SMA" />}
                    ref={(waktu_masih_sma) => { this.waktu_masih_sma = waktu_masih_sma; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: C F G C (2x) {'\n'}
                            C F C {'\n'}
                            Waktu masih SMA terpancang segunung cita-cita {'\n'}
                            Am Em F C G C {'\n'}
                            Ingin jadi sarjana istri cantik mobil lima, rumah gedong kaya raya {'\n'}
                            C F C {'\n'}
                            Ikut ujian perintis, kok malah menjadi tragis {'\n'}
                            Am Em F C {'\n'}
                            Rebutan sekolah favorit, tanpa tengok kanan kiri {'\n'}
                            G C {'\n'}
                            Tanpa tengok kanan kiri {'\n'}
                            Musik: C F G C (2x) {'\n'}
                            Em Am G {'\n'}
                            Iri melihat teman, dapat duduk ... dapat duduk di bangku kuliah{'\n'}
                            Em Am	G G7 {'\n'}
                            Tebar isu sana-sini, dia masuk ... dia masuk pakai koneksi {'\n'}
                            C F C {'\n'}
                            Semua tinggal harapan hadapilah dengan tabah {'\n'}
                            Am Em F C {'\n'}
                            Hidup ini perjuangan, pandanglan jauh ke depan {'\n'}
                            G C {'\n'}
                            Di sana masih banyak jalan {'\n'}
                            Musik: C F G C (2x) {'\n'}
                            Em Am G {'\n'}
                            Iri melihat teman, dapat duduk ... dapat duduk di bangku kuliah{'\n'}
                            Em Am	G G7 {'\n'}
                            Tebar isu sana-sini, dia masuk ... dia masuk pakai koneksi {'\n'}
                            C F C {'\n'}
                            Semua tinggal harapan hadapilah dengan tabah {'\n'}
                            Am Em F C {'\n'}
                            Hidup ini perjuangan, pandanglan jauh ke depan {'\n'}
                            G C {'\n'}
                            Di sana masih banyak jalan {'\n'}
                            Musik: : C F G C F G {'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Jadi Direktur" />}
                    ref={(jadi_direktur) => { this.jadi_direktur = jadi_direktur; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: Dm C Dm (2x) {'\n'}
                            Dm C Dm C {'\n'}
                            Semalam aku bermimpi, jadi direktur enak sekaii {'\n'}
                            A# C Dm A# C Dm {'\n'}
                            Sekretaris cantik centil dan seksi, dada montok pakai rok mini{'\n'} 
                            Dm C A# A A7 {'\n'}
                            Istriku datang lalu mengadu, pak RT tadi siang beli mercy baru {'\n'}
                            Dm C A# A A7 {'\n'}
                            Si dia marah tak mau kalah, pokoknya minta mobil yang lebih mewah {'\n'}
                            Dm C Dm C {'\n'}
                            Bingung aku mau ngapain, duit kantong habis digerogotin {'\n'}
                            A# C Dm A# C Dm {'\n'}
                            Aku pusing tujuh keliling, emangnya aku ini maling {'\n'}
                            Musik: : Dm C Dm (2x) {'\n'}
                            Dm C A# A A7 {'\n'}
                            Istriku datang lalu mengadu teman arisan sudah beli rumah baru {'\n'}
                            Dm C A# A A7 {'\n'}
                            Si dia ngotot tak mau kalah, pokoknya minta rumah yang lebih mewah {'\n'}
                            Dm C Dm C {'\n'}
                            Bingung aku mau ngapain, duit kantong habis digerogotin {'\n'}
                            A# C Dm A# C Dm {'\n'}
                            Aku pusing tujuh keliling lama-lama aku jadi sinting{'\n'}
                            Dm C A# A A7 {'\n'}
                            Istriku datang lalu mengadu, pak RT tadi siang beli mercy baru {'\n'}
                            Dm C A# A A7 {'\n'}
                            Si dia marah tak mau kalah, pokoknya minta mobil yang lebih mewah {'\n'}
                            Dm C A# A A7 {'\n'}
                            Istriku datang lalu mengadu teman arisan sudah beli rumah baru {'\n'}
                            Dm C A# A A7 {'\n'}
                            Si dia marah tak mau kalah, pokoknya minta rumah yang lebih mewah {'\n'}
                            Musik: Dm C Dm (2x){'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Hello" />}
                    ref={(hello) => { this.hello = hello; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Am G F GFG {'\n'}
                            I've been alone with you inside my mind {'\n'}
                            Am G F G F G {'\n'}
                            And in my dream I kiss your lips a thousand time {'\n'}
                            Am G F G F G {'\n'}
                            I sometime see you pass out side my door{'\n'}
                            E {'\n'}
                            Hello ..... {'\n'}
                            Am G Am {'\n'}
                            Hello hello hello sayang hello sayangku {'\n'}
                            Am G Am {'\n'}
                            Hello hello hello sayang hello sayangku {'\n'}
                            Dm F E {'\n'}
                            Lama tak jumpa ke mana saja tiada berita {'\n'}
                            Am G Am {'\n'}
                            Hello hel!o hello sayang hello sayangku{'\n'} 
                            Am Dm {'\n'}
                            Apakah engkau sudah tak sayang padaku {'\n'}
                            Dm Am {'\n'}
                            Apakah kasih telah hilang dihatimu {'\n'}
                            Am Dm {'\n'}
                            Apakah engkau sudah tak sayang padaku {'\n'}
                            Dm Am {'\n'}
                            Apakah kasih telah hilang dihatimu {'\n'}
                            G F {'\n'}
                            Mengapa engkau, Tiada menyapa {'\n'}
                            E F E {'\n'}
                            Apakah salahku, Pada dirimu ….	. {'\n'}
                            Am G Am {'\n'}
                            Hello hello hello sayang hello sayangku {'\n'}
                            Am Dm E {'\n'}
                            Hello hello bandung ibukota periangan {'\n'}
                            Dm F G	Am {'\n'}
                            Sudahlah lama beta tak jumpa dengan kau {'\n'}
                            E Am {'\n'}
                            Mari bung rebut kembali {'\n'}
                            E Am {'\n'}
                            Mari bung rebut kembali {'\n'}
                            Dm G {'\n'}
                            Tell me how to win your heart {'\n'}
                            C Am {'\n'}
                            For I haven't got a clue {'\n'}
                            F E {'\n'}
                            But let me start by saying {'\n'}
                            Am {'\n'}
                            I love you{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="25 Karat" />}
                    ref={(karat) => { this.karat = karat; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: F G C (4x) {'\n'}
                            C F G C {'\n'}
                            Takkan mungkin dapat kulupakan {'\n'}
                            C F G C {'\n'}
                            Keindahan dikau perawan{'\n'}
                            G C {'\n'}
                            Waktu kau lewat pulang kursus perivat, {'\n'}
                            G C {'\n'}
                            betismu padat indah tinggi terangkat {'\n'}
                            G C {'\n'}
                            Kulitmu halus mulus licin mengkilat {'\n'}
                            A# F G {'\n'}
                            Menggoda bagaikan permen coklat . {'\n'}
                            C{'\n'}
                            Sungguh hebat{'\n'}
                            F G C {'\n'}
                            Jantungku berdebar semakin cepat {'\n'}
                            F G C {'\n'}
                            Terbakar hasrat yang semakin berat {'\n'}
                            Musik: F G C (2x) {'\n'}
                            C F G C {'\n'}
                            Kukirimkan kata-kata rayuan, {'\n'}
                            C F G C {'\n'}
                            lewat surat cinta rangkap delapan {'\n'}
                            G C {'\n'}
                            Sebulan lewat diriku semakin berharap, {'\n'}
                            G C {'\n'}
                            pipiku kini sudah penuh jerawat {'\n'}
                            G C {'\n'}
                            Tapi temyata apa yang aku dapat {'\n'}
                            A# F G {'\n'}
                            Hanya senyum seorang sahabat . {'\n'}
                            C{'\n'}
                            Kata maaf {'\n'}
                            F G C{'\n'}
                            Yang ku butuhkan cinta bukannya nasehat {'\n'}
                            F G C {'\n'}
                            Yang ku butuhkan cinta 25 karat {'\n'}{'\n'}
                            Musik : F G C (2x) G C G C {'\n'}{'\n'}
                            G C {'\n'}
                            Kualitas tanggung diriku kurang bermutu {'\n'}
                            G C {'\n'}
                            Sulit berpadu cintaku itu ku tahu {'\n'}
                            F G C Am {'\n'}
                            Tak tahu malu itu bukan jenisku {'\n'}
                            G C {'\n'}
                            Nyatakan cinta padamu beban jiwaku ..... {'\n'}
                            Sembuh ! {'\n'}{'\n'}
                            Musik: F G C (2x) {'\n'}{'\n'}
                            C F G C {'\n'}
                            Tak akan ku tidur tengkurap, {'\n'}
                            C F G C {'\n'}
                            karna cintaku tiada harap {'\n'}
                            G C {'\n'}
                            Tak ingin aku sampai frustasi berat,{'\n'} 
                            G C {'\n'}
                            malam ini ku ingin tidur dengan lelap {'\n'}
                            G C {'\n'}
                            Hanya rasaku bangun dengan lebih sehat {'\n'}
                            A# F G {'\n'}
                            Ku buat secangkir kopi hangat . {'\n'}
                            C {'\n'}
                            Sungguh nikmat {'\n'}
                            F G C {'\n'}
                            Terlupakan semua yang telah lewat {'\n'}
                            F G C {'\n'}
                            Oh my God ternyata hidup ini nikmat {'\n'}{'\n'}
                            Musik: F G C (2x) G C G C {'\n'}{'\n'}
                            G C {'\n'}
                            Kualitas tanggung diriku kurang bermutu {'\n'}
                            G C {'\n'}
                            Sulit berpadu cintaku itu ku tahu {'\n'}
                            F G C Am {'\n'}
                            Tak tahu malu itu bukan jenisku {'\n'}
                            G C {'\n'}
                            Nyatakan cinta padamu beban jiwaku ..... {'\n'}
                            Sembuh ! {'\n'}{'\n'}
                            Fade Out: F G C (2x){'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Standy by Me" />}
                    ref={(Stand_By_Me) => { this.Stand_By_Me = Stand_By_Me; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Musik intro : F Dm A# C (2x){'\n'}{'\n'}
                            F{'\n'}
                            And the night has come{'\n'}
                            Dm{'\n'}
                            And the land is dark{'\n'}
                            A#	C	F{'\n'}
                            And it’s feel so lonely like we see{'\n'}
                            F	Dm{'\n'}
                            No I wont be afraid, no I want be afraid{'\n'}
                            G#	C	F C{'\n'}
                            Just only like you see, stand by me{'\n'}{'\n'}

                            Reff : F	Dm{'\n'}
                            Stand by me ooo stand by me ooo{'\n'}
                            A#	C	F C{'\n'}
                            Stand by me ooo stand by me{'\n'}
                            F	Dm{'\n'}
                            Stand by me ooo stand by me ooo{'\n'}
                            A#	C	F Dm{'\n'}
                            Stand by me ooo stand by me{'\n'}{'\n'}

                            Dm	C	Dm{'\n'}
                            Mari-mari berjoget bersama {'\n'}
                            Dm	C	Dm{'\n'}
                            Mari-mari berjoget gembira{'\n'}{'\n'}

                            Dm{'\n'}
                            Mari kawan semua{'\n'}
                            Dm{'\n'}
                            Jangan melamun saja{'\n'}
                            C	A#{'\n'}
                            Dengarkan lagu gembira{'\n'}
                            Dm{'\n'}
                            Kita berjoget bersama {'\n'}
                            C	A#{'\n'}
                            Dengarkan lagu gembira{'\n'}
                            Dm{'\n'}
                            Kita berjoget bersama{'\n'}
                            A# C	Dm C{'\n'}
                            Marii...laaah{'\n'}{'\n'}

                            Back to reff{'\n'}
                            Dm.....C{'\n'}
                            Musik : F Dm A# C{'\n'}
                            F Dm A# C Dm{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Amalan" />}
                    ref={(amalan) => { this.amalan = amalan; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Musik : C Am G C 2x{'\n'}
                            C	Em	F	C{'\n'}
                            Ini kisah amalan yang sedang digalakkan{'\n'}
                            Dm	F	G	C{'\n'}
                            Yang hasilnya pantas untuk dikhayalkan{'\n'}
                            C	Em	F	{'\n'}
                            Yang penting kami haruslah merasakan {'\n'}
                            C{'\n'}
                            untung{'\n'}
                            Dm	F	G	C{'\n'}
                            Sementara andapun harus puas{'\n'}
                            Dm F	G	C{'\n'}
                            Kalo enggak puas ya harus puas{'\n'}{'\n'}

                            Msuik : C Am G C{'\n'}
                            C	Em	F{'\n'}
                            Kau pasanglah sederetan angka-angka{'\n'}
                            C {'\n'}
                            jitu {'\n'}
                            Dm	F	G	C{'\n'}
                            Lalu kau nantikan hasilnya kemudian {'\n'}
                            C	Em	F	C{'\n'}
                            Kalau kau tepat amalanmupun pasti kena{'\n'}
                            Dm	F	G C {'\n'}
                            Kalau engkau linglung ya Cuma gigit jari {'\n'}
                            Dm	F	G C{'\n'}
                            Konsultasilah pada embah dukun{'\n'}{'\n'}

                            Musik C Am G C 2x{'\n'}
                            Dm G C Am{'\n'}
                            Dm F G{'\n'}{'\n'}

                            Reff :{'\n'}
                            C	Em	F{'\n'}
                            Apa enggak bingung sudah capek{'\n'}
                            C{'\n'}
                            berhitung{'\n'}
                            Dm	F	C{'\n'}
                            Angkanya Cuma selisih satu{'\n'}
                            C	Em{'\n'}
                            Kawanpun datang menghibur{'\n'}
                            F	C{'\n'}
                            Kan Cuma selisih satu{'\n'}
                            DM	F	G{'\n'}
                            Yuk kita coba lagi minggu depan{'\n'}{'\n'}

                            Musik : C Dm F C 2x{'\n'}
                            C Dm G C{'\n'}
                            C Am G C{'\n'}
                            C	Em	F	C{'\n'}
                            InI amalan katanya untuk pembangunan{'\n'}
                            Dm	F	G	C	{'\n'}
                            Menunjang di sektor keolahragaan {'\n'}
                            C	Em	F{'\n'}
                            Biar sukses biar menang nyatanya {'\n'}
                            C{'\n'}
                            hancur-hancuran{'\n'}
                            Dm	F	G C{'\n'}
                            Itulah hasil dari jual amalan{'\n'}{'\n'}

                            Musik : C Am G C 2x{'\n'}
                            Dm G C Am{'\n'}
                            Dm F G{'\n'}{'\n'}

                            Back to reff{'\n'}{'\n'}

                            Musik : C Dm F C 2x{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Anissa" />}
                    ref={(anissa) => { this.anissa = anissa; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro : {'\n'}
                            C F {'\n'}
                            Anissa ... Anissa ... {'\n'}
                            Am G C {'\n'}
                            Karena dirimu dalam seminggu habis weselku {'\n'}
                            Musik : C F C (2x) {'\n'}
                            C F G C ( 2x) {'\n'}{'\n'}
                            ( * ) {'\n'}
                            C F {'\n'}
                            Ku punya kekasih tinggai di cimahi yang sangat kusayangi {'\n'}
                            F C G C {'\n'}
                            Body nan aduhai rambut terurai bikin ngiler lelaki {'\n'}
                            C	F {'\n'}
                            Katanya padaku malam minggu lalu belikan aku baju {'\n'}
                            F C G C {'\n'}
                            Lalu nonton film dan pergi disko pulangnya makan bakso {'\n'}
                            C F {'\n'}
                            Anissa ... Anissa ... {'\n'}
                            Am G C {'\n'}
                            Karena dirimu dalam seminggu habis weselku {'\n'}
                            C F {'\n'}
                            Anissa ... Anissa ... {'\n'}
                            Am G C {'\n'}
                            Karena dirimu dalam seminggu habis napasku {'\n'}{'\n'}
                            Musik: C F G C (2x) {'\n'}{'\n'}
                            Back to ( * ) {'\n'}{'\n'}
                            Musik : C F C (2x) {'\n'}
                            C F G C ( 2x) {'\n'}{'\n'}
                            C F {'\n'}
                            Anissa ... Anissa ... {'\n'}
                            Am G C {'\n'}
                            Karena dirimu dalam seminggu puaslah aku {'\n'}
                            C F {'\n'}
                            Anissa ... Anissa ... {'\n'}
                            Am G C {'\n'}
                            Karena dirimu dalam seminggu habislah aku{'\n'}{'\n'}
                            Musik: C F C (2x){'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Berjumpa Lagi" />}
                    ref={(berjumpa_lagi) => { this.berjumpa_lagi = berjumpa_lagi; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: A Bb A (3x) Bb A (2x) {'\n'}
                            Dm C Dm (2x) Gm Dm A Bb A (3x) Bb A (2x) {'\n'}{'\n'}
                            Dm Gm Dm {'\n'}
                            Berjumpa lagi, oey kita berjumpa lagi {'\n'}
                            Dm Gm Dm {'\n'}
                            Bertemu lagi, oey kita bertemu lagi {'\n'}
                            Dm C Bb Dm {'\n'}
                            Mari kita gembira berdendang dan bernyanyi {'\n'}
                            Dm C Bb Dm {'\n'}
                            Hilangkan duka lara lupakan sedih hati {'\n'}{'\n'}
                            Musik: A Bb A (3x) Bb A (2x) {'\n'}
                            Dm C Dm (2x) Gm Dm A Bb A (3x) Bb A (2x){'\n'}{'\n'}
                            Dm Gm Dm {'\n'}
                            Berjumpa lagi, oey kita berjumpa lagi {'\n'}
                            Dm Gm Dm {'\n'}
                            Bertemu lagi, oey kita bertemu lagi {'\n'}
                            Dm C Bb Dm {'\n'}
                            Mari kita gembira berdendang dan bernyanyi {'\n'}
                            Dm C Bb Dm {'\n'}
                            Hilangkan duka lara lupakan sedih hati {'\n'}{'\n'}
                            Musik: A Bb A (3x) Bb A (2x) {'\n'}
                            Dm C Dm (2x) Gm Dm A Bb A (3x) Bb A (2x){'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Bos Dangdut" />}
                    ref={(bos_dangdut) => { this.bos_dangdut = bos_dangdut; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>
                            Tidak ada Lirik{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Boulevard" />}
                    ref={(boulevard) => { this.boulevard = boulevard; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro : Am Dm F E Am{'\n'}{'\n'}
                            *	{'\n'}
                            Am{'\n'}
                            I don’t know why {'\n'}
                            Dm{'\n'}
                            You said good bye{'\n'}
                            F	E	{'\n'}
                            Just let me know didn’t go forever my life{'\n'}
                            Am{'\n'}
                            Please tell why {'\n'}
                            Dm{'\n'}
                            You make me cry{'\n'}
                            F	E	Am{'\n'}
                            I beg you please all my money if that you want me to{'\n'}{'\n'}
                            **{'\n'}
                            Am	Dm{'\n'}
                            Wajahmu dulu berseri-seri{'\n'}
                            G	C	Am{'\n'}
                            Senyummu dulu manis sekali{'\n'}
                            Dm{'\n'}
                            Wajahmu dulu berseri-seri{'\n'}
                            G	C	Am{'\n'}
                            Senyummu dulu manis sekali{'\n'}
                            Am	E{'\n'}
                            Pandangan matamu bercahaya{'\n'}
                            E	F	Am{'\n'}
                            Mengapa kini jauh berbeda{'\n'}
                            Am	E {'\n'}
                            Hilangkan salah sangka serta cemburu{'\n'}
                            E	F	Am{'\n'}
                            Ataupun pikiran yang tiada menentu{'\n'}{'\n'}
                            Musik : Am Dm E Am 2x{'\n'}{'\n'}
                            Am	Dm{'\n'}
                            Never know that you would go so far{'\n'}
                            G	C	Am{'\n'}
                            When you left me on the boulevard{'\n'}
                            Am	Dm{'\n'}
                            Come again you would release my pain{'\n'}
                            F	E	Am{'\n'}
                            And we could be lovers again{'\n'}{'\n'}
                            Back to *{'\n'}
                            **{'\n'}{'\n'}
                            Musik : Am Dm E Am 2x{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Darah Biru" />}
                    ref={(darah_biru) => { this.darah_biru = darah_biru; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: C F C (2x) Em Am G (2x) {'\n'}{'\n'}

                            C F C {'\n'}
                            Dulu aku punya sesuatu {'\n'}
                            C	F C {'\n'}
                            Nenek moyangku berikan tanpa ragu-ragu {'\n'}
                            Dm _ C G C {'\n'}
                            Peninggalan dari jaman batu sesuatu yang lugu {'\n'}
                            Dm _ C G C {'\n'}
                            Peninggalan dari jaman batu sesuatu yang lugu {'\n'}{'\n'}
                            (* ) {'\n'}
                            C F C{'\n'}
                            Cepat hari berganti bawaku jauh ke sebrang negri {'\n'}
                            C F C {'\n'}
                            Turuti kata hati menuntut ilmu yang paling tinggi {'\n'}
                            Dm	C G	C{'\n'}
                            Anak-anak pejabat negri temanku minum kopi {'\n'}
                            Dm C G C {'\n'}
                            Anak para pembesar negri menemaniku cuci gigi {'\n'}
                            C Em	F C {'\n'}
                            Cara hidupku yang kini serba maju merubah diriku secara utuh {'\n'}
                            C Em F C {'\n'}
                            Yang sangat indah yang dulu aku miliki kini bergantI dengan tirani {'\n'}
                            Bb C	Bb C {'\n'}
                            Tak mungkin ku lagi jatuh cinta setengah mati padamu perawan ayu desaku {'\n'}
                            Bb C Bb C {'\n'}
                            Tak mungkin diriku lagi akan mengangkat topi padamu pak tua penebang kayu {'\n'}
                            Dm C G C {'\n'}
                            Meskipun aku tahu karena semuanya itu tak akan darahku menjadi biru {'\n'}
                            Dm C G C {'\n'}
                            Meskipun aku tahu karena semuanya itu tak akan darahku menjadi biru {'\n'}{'\n'}

                            Musik: C Dm Em F {'\n'}
                            G F Em Om G F Em Dm {'\n'}
                            C Em Am Dm G F G C {'\n'}
                            C Em Am Dm G F G C {'\n'}{'\n'}

                            Back to ( * ) {'\n'}{'\n'}

                            Musik : C Em Am Dm G F G C {'\n'}
                            C Em Am Dm G F G C {'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="D.O." />}
                    ref={(do_online) => { this.do_online = do_online; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: C G D G ( 2x ){'\n'}
                            D D D G{'\n'}
                            G C G {'\n'}
                            Pertama aku masuk kuliah melangkah aku dengan gagah {'\n'}
                            C G D	G {'\n'}
                            Godain cewek pulang sekolah pokoknya aku paling gagah {'\n'}
                            G C G {'\n'}
                            Pertama aku masuk kuliah melangkah aku dengan gagah {'\n'}
                            C G D	G {'\n'}
                            Godain cewek di depan rumah pokoknya aku paling gagah {'\n'}
                            C G {'\n'}
                            Ku dapat gadis manis anaknya juru tulis {'\n'}
                            C G {'\n'}
                            Bodynya bahenol kayak gitar spanyol {'\n'}
                            Em D {'\n'}
                            Goyangnya bikin males kuliah {'\n'}
                            G C G {'\n'}
                            Ketika aku mau ujian terasa makin gelagapan {'\n'}
                            C G D	G {'\n'}
                            Mondar-mandir cari fotokopian dibaca malah kebingungan {'\n'}
                            C G {'\n'}
                            Tetapi kini setelah aku tahu {'\n'}
                            C G {'\n'}
                            Nilai ujian gagal lulus semua {'\n'}
                            Em D {'\n'}
                            Kayaknya aku mau di DO .... {'\n'}{'\n'}
                            Musik : C D C G (2x) {'\n'}
                            C G D G (4x) {'\n'}
                            C G {'\n'}
                            Tetapi kini setelah aku tahu {'\n'}
                            C G {'\n'}
                            Nilai ujian gagal lulus semua {'\n'}
                            Em D {'\n'}
                            Kayaknya aku mau di DO .... {'\n'}
                            G C G {'\n'}
                            Akhirnya aku resmi di DO pacarku hamil tiga bulan {'\n'}
                            C G {'\n'}
                            Meminta pertanggungjawaban {'\n'}
                            D G {'\n'}
                            Bikin otak jadi tambah edan {'\n'}
                            D G {'\n'}
                            Bikin otak jadi tambah edan {'\n'}
                            Fade Out : D G{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Lihatlah Kawan" />}
                    ref={(lihatlah_kawan) => { this.lihatlah_kawan = lihatlah_kawan; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Musik : C{'\n'}
                            C{'\n'}
                            Lihatlah kawan lihatlah dia sungguh {'\n'}
                            C{'\n'}
                            cantik orangnya{'\n'}
                            C	C{'\n'}
                            Coba lihat ke sana mobil mewahnya {'\n'}
                            C{'\n'}
                            mobil model mutaklhir{'\n'}{'\n'}

                            F{'\n'}
                            Yang paling gilaaa{'\n'}
                            C{'\n'}
                            Yang paling gilaaa {'\n'}
                            (2x){'\n'}{'\n'}

                            C{'\n'}
                            Ingin diriku kawan, kenal dengannya {'\n'}
                            C{'\n'}
                            bagaimana caranya{'\n'}
                            C	C {'\n'}
                            Semua cara yang ada sudah kucoba tapi tak kena juga {'\n'}
                            F	C{'\n'}
                            Mungkin karna dirinya yang kaya sekali{'\n'}
                            F	C{'\n'}
                            Atau karna diriku yang tak punya hoki{'\n'}{'\n'}

                            Musik : Dm G C Am 3x{'\n'}{'\n'}

                            Reff :	{'\n'}
                            C{'\n'}
                            Sungguh diriku tak dapat mengerti{'\n'}
                            G{'\n'}
                            Mengapa terjadi di dunia ini	Mengapa ada yang kaya sekali{'\n'}
                            C{'\n'}
                            Mengapa ada yang miskin sekali{'\n'}{'\n'}

                            Musik : Dm G C Am 2x{'\n'}{'\n'}

                            Back to reff{'\n'}{'\n'}

                            Musik : C {'\n'}
                            C{'\n'}
                            Bukan wajah yang cantik manis menarik{'\n'}
                            C{'\n'}
                            bukan harta yang banyak{'\n'}
                            C	C{'\n'}
                            Apalagi kalau Cuma hartanya babe{'\n'}
                            C{'\n'}
                            Cuma miliknya babe{'\n'}
                            F	C{'\n'}
                            Sukur kalau bukan hasil korupsi{'\n'}
                            F	C{'\n'}
                            Sukur kalau bukan hasil manipulasi{'\n'}{'\n'}

                            Musik : Dm G C Am Dm G C{'\n'}{'\n'}

                            *{'\n'}
                            Tampilkan dirimu, banggakan dirimu dengan prestasi{'\n'}
                            Jadikan dirimu yang penuh arti bagi kami yang kecil ini{'\n'}{'\n'}

                            Musik : Dm G C Am {'\n'}
                            Dm G C G{'\n'}
                            Back to *{'\n'}
                            Musik : C C{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Malam Minggu" />}
                    ref={(malam_minggu) => { this.malam_minggu = malam_minggu; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Intro: A E A E A E A {'\n'}
                            A E {'\n'}
                            Malam-malam minggu, malam-malam minggu malam yang kutunggu {'\n'}
                            E A {'\n'}
                            Aku akan pergi, aku akan pergi ke rumah kasihku {'\n'}
                            A E{'\n'}
                            Harapanku slalu, harapanku slalu dia kan menunggu {'\n'}
                            E A {'\n'}
                            Kita kan bersama, kita kan bersama pergi ke pasar baru {'\n'}{'\n'}
                            Reff I : {'\n'}
                            A D E	A {'\n'}
                            Oooo ... alangkah cantik wajahmu indah menawan selalu {'\n'}
                            A D E A F#m {'\n'}
                            Oooo ... alangkah manis parasmu indah menawan selalu {'\n'}
                            Bm E A {'\n'}
                            Sungguh kucinta dirimu sepanjang masa {'\n'}{'\n'}
                            (* ) {'\n'}
                            A E {'\n'}
                            Malam-malam minggu, malam-malam minggu malam yang kutunggu {'\n'}
                            E A {'\n'}
                            Aku akan pergi, aku akan pergi ke rumah kasihku {'\n'}
                            A E{'\n'}
                            Harapanku slalu, harapanku slalu dia kan menunggu {'\n'}
                            E A {'\n'}
                            Kita kan bersama, kita kan bersama pergi ke pasar baru {'\n'}{'\n'}

                            Musik: A E A E A E A {'\n'}{'\n'}

                            Back To ("){'\n'}{'\n'}

                            Reff II : {'\n'}
                            A D E	A {'\n'}
                            Oooo ... alangkah cantik wajahmu indah menawan selalu {'\n'}
                            A D E A F#m {'\n'}
                            Oooo ... alangkah manis parasmu indah menawan selalu {'\n'}
                            Bm E A {'\n'}
                            Sungguh kucinta dirimu sepanjang masa {'\n'}
                            Bm E A {'\n'}
                            Sungguh kucinta dirimu sepanjang masa {'\n'}{'\n'}

                            Musik: A E A E A E A {'\n'}{'\n'}

                            Back to Reff II {'\n'}{'\n'}

                            Musik: A E A E A E A{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <PopupDialog
                    dialogTitle={<DialogTitle style={{fontWeight: 'bold', color: 'black'}} title="Sepuntung Rokok" />}
                    ref={(sepuntung_rokok) => { this.sepuntung_rokok = sepuntung_rokok; }}
                >
                    <ScrollView style={{paddingHorizontal: 20}} >
                        <Text>{'\n'}
                            Musik : F Am A# F C{'\n'}{'\n'}

                            F	Gm{'\n'}
                            Bukan maksudku meninggalkanmu{'\n'}
                            Am	F C{'\n'}
                            Kau tahu cintaku hanya untukmu{'\n'}
                            F Gm{'\n'}
                            Slamat tinggal sayang, aku akan pergi{'\n'}
                            A#	F	C{'\n'}
                            Beli rokok sebatang di warung depan{'\n'}{'\n'}

                            Musik : F Am A# F C{'\n'}
                            *{'\n'}
                            F	Gm{'\n'}
                            Jangan tinggalkan rumah bambu ini{'\n'}
                            A#	F C{'\n'}
                            Karna sebentar lagi ku kan kembali{'\n'}
                            F	Am{'\n'}
                            Aku terpaku di depan pintu{'\n'}
                            A#	F C{'\n'}
                            Teringat hutang yang minggu lalu{'\n'}
                            F	Am{'\n'}
                            Aku harapkan pengertianmu {'\n'}
                            A#	C{'\n'}
                            Pinjami aku sepuluh ribu{'\n'}
                            F	Gm{'\n'}
                            Jangan risaukan uangmu itu{'\n'}
                            A#	F C{'\n'}
                            Aku berjanji kan menyuntingmu{'\n'}{'\n'}

                            Musik : F Am A# F C (2x){'\n'}{'\n'}

                            Back to *{'\n'}{'\n'}

                            Musik : F Am A# F C 2x{'\n'}
                        </Text>
                    </ScrollView>
                </PopupDialog>
                <ScrollView>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                        <Image
                            source={require('../assets/osd.jpeg')}
                            style={{width: 100, height: 100}}
                        />
                    </View>
                    <View style = {{flex: 1, margin: 10 }}>
                        <Text style={styles.title} >
                            Orkes Semi Dangdut HMT-ITB
                        </Text>
                        <Text style={styles.sejarah} >
                            Tahun 1978 dengan dimotori oleh Herryal Zoelkarnaen (TU ’73) lahirlah OSD seperti yang kita kenal serakarang. Dahulu, OSD dikenal dengan nama “OSD Miner” dengan personel awalnya yaitu: {'\n'}
                            Manager : Unan Gunawan ( TU 76 ) {'\n'}
                            Vokalis : Chazali ( MET 73 ), M.Irfan (75) {'\n'}
                            Mandolin : Syahrul Nazril (TU 77) {'\n'}
                            Gitaris : Setiawan (74), Yultido I (75), Permadi Gunadi (74) {'\n'}
                            Basis : Lukman Nurhakim (75) {'\n'}{'\n'}
                            Awalnya, OSD didirikan sebagai alat bantu perjuangan moral menentang rencana pemerintah untuk membungkam kebebasan mahasiswa lewat kebijakan NKK (Normalisasi Kehidupan Kampus) di akhir 70an. Dengan lagu-lagu dan ucapan-ucapan kocak OSD mengkritik pemerintah secara santun. Hal ini dilakukan agar tidak tertangkap tantara. Justru waktu itu, tantara-tentara yang mengawasi show OSD malah senang menonton OSD yang kocak. Lagu-lagu semakin bertambah dengan masuknya Sumaryanto (79) dan Veterano Sitompul. Nama OSD dipakai setelah mereka masuk. Lirik lagu OSD banyan dibuat oleh Iwanudin a.k.a Iwan Blow (’75). Beliau juga menjciptakan lagu kebangsaan anak-anakn OSD yaitu ERIKA. {'\n'}{'\n'}
                            Sempat, dari hasil OS jurusan, ketahuan kalua Sulistiyadi suaranya mirip sekali dengan Soeharto. Sehingga setiap tampil, pasti ada pidato Soeharto nya. Karena dianggap mengkritik pemerintah, sempat dosen-dosen tambang memanggil Permadi Gunadi (Ketua HMT di akhir 70an) dan memintanya mengingatkan agar OSD menjaga ucapannya ketika berada di panggung. Akan tetapi salah satu dosen, Pak Ir. Subeno (alm) jusru mendorong Permadi untuk memajukan OSD. Pada tahun 1979, OSD sempat rekaman satu album dengan 8 sampai 10 lagu yang diciptakan oleh personil-personilnya, sempat beredar dua mingguan, lantas kaset-kasetnya hilang menguap dari took-toko kaset. {'\n'}{'\n'}
                            Pada tahun 1994 setelah lama OSD vakum,Afandi Mardani waktu itu mengusulkan kepada Joko (TE ’91) Kahim saat itu untuk kembali mengaktifkan OSD. OSD saat itu pun melakukan pencarian alat musi baru dan pembagian teks lagu OSD kepada anggota himpunan. pada saat itulah pertama kali OSD merekam lagu-lagu dalam format mp3. Dimasa ini rekaman lagu-lagu OSD dalam format mp3 dilahirkan. Hasilnya ialah lagu-lagu yang dapat dinyanyikan dari generasi ke generasi. OSD dimasa sekarang adalah OSD yang ingin berkembang ke arah yang lebih baik. Saat ini OSD sedang berusaha untuk mengembalikan eksistensinya seperti pada masa kejayaan Iwan Blow dkk. Frekuensi untuk tampil di muka publik terlebih masyarakat kampus ITB ditingkatkan. Hal ini dibuktikan dengan banyakkan kegiatan manggung diluar maupun di dalam kampus. Revolusi yang dilakukan ialah dengan didirikannya perkumpulan untuk fans – fans fanatik OSD yang dijuluki BOS DANGDUT. Kontribusi para BOS DANGDUT terbukti sangat efektif dalam menyebarkan aroma dangdut retro khas ala OSD. Semoga OSD saat ini dan yang akan datang mampu menunjukkan kehebatannya dimasa mendatang. (tulisan dari Pak Dhe) {'\n'}{'\n'}
                            ATAS NAMA DANGDUT DAN CINTA {'\n'}{'\n'}
                            Lagu andalan: Erika, Annisa, 25 Karat, boulevard, kopi darat, bos dangdut, stand by me, DO, jadi direktur, dll {'\n'}
                            Pusat: HMT ITB Bandung {'\n'}
                            Cabang: Sangatta, Sorowako, Tembagapura. {'\n'}
                        </Text>
                        <Text style={styles.title} >
                            Daftar Lagu
                        </Text>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                1. Erika
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/R2WXhN8f/1_Erika.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => {this.erika.show()}} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                2. Waktu Masih SMA
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/mp3/q2upBp5Yce/waktu_masih_sma.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.waktu_masih_sma.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                3. Jadi Direktur
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/Dx4Fu9wP/jadi_direktur.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.jadi_direktur.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                4. Hello
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/uWjsFCbs/hello.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.hello.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                5. 25 Karat
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/5v2IGWxC/25_karat.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.karat.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                6. Stand by Me
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/mOq_ZiWG/Stand_By_Me.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.Stand_By_Me.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                7. Amalan
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/mp3/HEeV3lX5ce/amalan.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.amalan.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                8. Anissa
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/mp3/97huLyAfce/anissa.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.anissa.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                9. Berjumpa Lagi
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/2KANTJOp/berjumpa_lagi.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.berjumpa_lagi.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                10. Bos Dangdut
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/fsZxWct2/bos_dangdut.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.bos_dangdut.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                11. Boulevard
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/Qjpp22W3/boulevard.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.boulevard.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                12. Darah Biru
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/WNnS6l4i/darah_biru.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.darah_biru.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                13. Do
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/mp3/HevQU_V3ce/do_online.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.do_online.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                14. Lihatlah Kawan
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/WNUWJYFZ/lihatlah_kawan.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.lihatlah_kawan.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                15. Malam Minggu
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/music/ogiQKiUt/malam_minggu.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.malam_minggu.show()} />
                            </View>
                        </View>
                        <View style={styles.lagu} >
                            <Text style={{fontSize: 20}} >
                                16. Sepuntung Rokok 
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                            <Icon name="md-play" color="white" onPress={() => Linking.openURL('https://www.4shared.com/mp3/vxlYm5bpce/sepuntung_rokok.html')} />
                            <Icon name="md-document" style={{paddingLeft: 10}} color="white" onPress={() => this.sepuntung_rokok.show()} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }

}

export default OSDScreen

const styles = StyleSheet.create({
    icon: {
        height: 20,
        width: 20
    },
    title: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 28 
    },
    sejarah: {
        letterSpacing: 5,
        padding: 20,
        textAlign: 'justify' 
    },
    lagu: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        borderColor: '#575756',
        borderWidth: 3,
        margin: 10,
        padding: 10
    }
})
