import React from 'react';
import { Container, Segment, Grid, Column, Label, Image, Divider, Icon, Input, Button, Flag } from 'semantic-ui-react';



function App() {
  return (
    <div>

      <Segment basic textAlign='center'>

        <Grid>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={1}>
            <i class='id flag' />
          </Grid.Column>
          <Grid.Column width={1}>
            <i class="angle left icon"></i>
          </Grid.Column>
          <Grid.Column width={1}>
            <i class="angle right icon"></i>
          </Grid.Column>
          <Grid.Column width={9}>
            <Input fluid
              icon='star'
              iconPosition='right'
              placeholder='Search...' />
          </Grid.Column>
          <Grid.Column width={2}>
            <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' avatar />
            <span style={{fontWeight:'bold'}}>Patrick</span>
          </Grid.Column>
          <Grid.Column width={1}>
          </Grid.Column>
        </Grid>




        <Divider horizontal>SELAMAT DATANG!!</Divider>
        <Container textAlign='right'> <Label as='a' color='teal' tag>
          SPORT
        </Label></Container>

        <br>
        </br>

        <Container textAlign='center'>
          <p>
            Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis.Andai gugatan para rivalnya diterima,akankah Ducati akan melanjutkan ke CAS(Pengadilan
            Arbitrase Olahraga)?Suzuki,Honda,KTM,dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama
            MotoGP 2019 di Qatar karena dianggap ilegal.Pada prosesnya,Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.Keempat tim meyakini,komponen itu memiliki
            fungsi aerodinamis,dan menghasilkan downforce,yang membantu motor melesat di trek.Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui
            Technical Director sebelum balapan.Pada awalnya,protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM.Sidang itu sendiri akan dilakukan
            sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang.Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu.Namun,seandainya
            pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS."Di dalam federasi,derajatnya berakhir di Pengadilan Banding FIM.Anda harus
            pergi ke CAS,yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM,"Dall'Igna mengungkapkan kepada MotoGP.com."Saya bahkan tidak ingin
            memikirkan sampai titik ini.Kami sangat yakin bahwa kami tidak melanggar regulasi kok,dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan
            secara berbeda."
          </p>

        </Container>

        <br>
        </br>

        <Button
          color='teal'
          content='Tambahkan ke List'
          icon='add'
          labelPosition='left'
        />
      </Segment>
    </div>
  );
}

export default App;
