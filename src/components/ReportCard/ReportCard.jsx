import React, { useRef } from 'react';
import './ReportCardStyle.css';
import clubLogo from '../../assets/mkemalpasa.png';
import { Divider } from 'antd';
import html2canvas from 'html2canvas';

const athlete = {
  id: 1,
  name: 'Serdar',
  surname: 'Mengütay',
  club: 'Kemalpaşaspor',
  clubLogo: clubLogo,
  height: 181, // Boy
  weight: 82, // Kilo
  speedRun: 4.12, // 30 Metre Koşu Süresi
  agility: 18.19, // Çeviklik Süresi
  flexibility: 6, // Esneklik
  jumping: 41.12, // Dikey Sıçrama
  birthYear: 2003
};

const ReportCard = () => {
  const reportCardRef = useRef(null);

  const downloadAsJPG = () => {
    if (reportCardRef.current) {
      html2canvas(reportCardRef.current, { scale: 2 }).then((canvas) => {
        const link = document.createElement('a');
        link.download = `${athlete.name}_${athlete.surname}_report.jpg`;
        link.href = canvas.toDataURL('image/jpeg', 1.0); // 1.0 en yüksek kaliteyi temsil eder
        link.click();
      });
    }
  };

  return (
    <div>
      <div className="reportCard" ref={reportCardRef}>
        <header className="header">
          <div>
            <h1>Athletic Labs</h1>
          </div>
          <Divider variant="solid" type="vertical" style={{ height: 120 }} />
          <div className="headerRight">
            <img src={athlete.clubLogo} alt="Kulüp Logosu" className="clubLogo" />
            <div>
              <h1>{athlete.club}</h1>
              <p>İsim: {athlete.name}</p>
              <p>Soyisim: {athlete.surname}</p>
              <p>Doğum Yılı: {athlete.birthYear}</p>
            </div>
          </div>
        </header>
        <table className="statsTable">
          <tbody>
            <tr>
              <th>Boy</th>
              <td>{athlete.height} cm</td>
            </tr>
            <tr>
              <th>Kilo</th>
              <td>{athlete.weight} kg</td>
            </tr>
            <tr>
              <th>30 Metre Koşu</th>
              <td>{athlete.speedRun} sn</td>
            </tr>
            <tr>
              <th>Çeviklik</th>
              <td>{athlete.agility} sn</td>
            </tr>
            <tr>
              <th>Esneklik</th>
              <td>{athlete.flexibility} cm</td>
            </tr>
            <tr>
              <th>Dikey Sıçrama</th>
              <td>{athlete.jumping} cm</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={downloadAsJPG}>Karneyi JPG Olarak İndir</button>
    </div>
  );
};

export default ReportCard;
