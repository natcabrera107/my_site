import { useState } from 'react';
import './Home.css';

function ReportCarousel({ title, images }) {
    const [current, setCurrent] = useState(0);

    const goToPrev = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="report-section">
            <h2>{title}</h2>
            <div className="carousel">
                {images.length > 1 && (
                    <button className="carousel-btn prev" onClick={goToPrev} aria-label="Previous slide">
                        ‹
                    </button>
                )}

                <div className="carousel-track">
                    <img
                        src={images[current]}
                        alt={`${title} slide ${current + 1}`}
                        className="carousel-img"
                    />
                </div>

                {images.length > 1 && (
                    <button className="carousel-btn next" onClick={goToNext} aria-label="Next slide">
                        ›
                    </button>
                )}
            </div>

            {images.length > 1 && (
                <div className="carousel-dots">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === current ? 'active' : ''}`}
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

function Home() {
    return (
        <div className="container">
            <h1>Power BI Dashboards and Projects</h1>
        <p className="dashboard-intro">
            All dashboards are made from views designed in SQL or Python and then
            visualized in Power BI using DAX or using Python libraries such as Matplotlib,
            SciPy, Seaborn, and Plotly. For more portfolio projects, please reach out directly via the contact page. 
        </p>
            <ReportCarousel
                title="KPI Tracking Across Business Advising for Entrepreneurs"
                images={[
                    "/reports/copyBDS_Goals_Report_2-1.png",
                    "/reports/copyBDS_Goals_Report_2-2.png",
                    "/reports/copyBDS_Goals_Report_2-3.png",
                    "/reports/copyBDS_Goals_Report_2-4.png",
                    "/reports/copyBDS_Goals_Report_2-5.png",
                    "/reports/copyBDS_Goals_Report_2-6.png",
                    "/reports/copyBDS_Goals_Report_2-7.png",
                    "/reports/copyBDS_Goals_Report_2-8.png",
                    
                ]}
            />
            <ReportCarousel
                title="Service Data By Demographic Dashboard"
                images={[
                    "/reports/Copy_Client Demographics By First Service Delivery-1.png",
                    "/reports/Copy_Client Demographics By First Service Delivery-2.png",
                    "/reports/Copy_Client Demographics By First Service Delivery-3.png",
                    "/reports/Copy_Client Demographics By First Service Delivery-4.png",
                    "/reports/Copy_Client Demographics By First Service Delivery-5.png",
                    "/reports/Copy_Client Demographics By First Service Delivery-6.png",
                    "/reports/Copy_Client Demographics By First Service Delivery-7.png",
                ]}
            />
            <ReportCarousel
                title="Oil Supply Chain Analysis"
                images={[
                    "/reports/output1.png",
                    "/reports/output2.png",
                    "/reports/output3.png",
                    "/reports/output4.png",
                    "/reports/output5.png",
                    "/reports/output6.png",
                    "/reports/output7.png",
                    "/reports/output8.png",
                    "/reports/output9.png",
                    "/reports/output10.png",
                    "/reports/output12.png",
                ]}
            />
            <ReportCarousel
                title="Events Dashboard"
                images={[
                    "/reports/copy_BDS_Events-01.png",
                    "/reports/copy_BDS_Events-02.png",
                    "/reports/copy_BDS_Events-04.png",
                    "/reports/copy_BDS_Events-05.png",
                    "/reports/copy_BDS_Events-06.png",
                    
                ]}
            />
            <ReportCarousel
                title="Impact Dashboard - Equity, Loans, Business Starts, Sales Increase"
                images={[
                    "/reports/copy_BDS_Impact-1.png",
                    "/reports/copy_BDS_Impact-2.png",
                    "/reports/copy_BDS_Impact-3.png",
                    "/reports/copy_BDS_Impact-4.png",
                    "/reports/copy_BDS_Impact-5.png",
                    "/reports/copy_BDS_Impact-6.png",
                    "/reports/copy_BDS_Impact-7.png",
                    "/reports/copy_BDS_Impact-8.png",
                ]}
            />
            <ReportCarousel
                title="Loans"
                images={[
                    "/reports/Loan2.png",
                    "/reports/Loan3.png",
                    "/reports/Loan4.png",
                    "/reports/Loan5.png",
                ]}
            />
        

        </div>
    );
}

export default Home;