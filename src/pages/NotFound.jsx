import { useEffect, useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <div id="dashboard-container">
        <style>{`
          #dashboard-container {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #ffffff; /* Sesuai warna dasar kamu */
            font-family: 'Inter', -apple-system, sans-serif;
          }

          .error-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-bottom: 100px; /* Biar gak terlalu mepet bawah */
          }

          /* Styling untuk tag <p> sesuai permintaan */
          #dashboard-container p {
            font-size: 1.5rem;
            font-weight: 600;
            color: #2d3436;
            margin: 0;
            padding: 20px;
            border-left: 4px solid #2ecc71; /* Aksen hijau sesuai sidebar kamu */
            background-color: #f9fdfb; /* Hijau sangat tipis */
          }

          .error-code {
            font-size: 8rem;
            font-weight: 800;
            color: #e1e8ed; /* Warna abu muda halus */
            line-height: 1;
            margin-bottom: -20px;
          }
        `}</style>

        <PageHeader title="Not Found" breadcrumb={["Dashboard", "Not Found"]} />
        
        <div className="error-content">
            <div className="error-code">404</div>
            <p>Ini Halaman Not Found</p>
        </div>
    </div>
  );
}