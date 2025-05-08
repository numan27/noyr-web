import React from "react";
import styles from "./style.module.scss";

export default function SizeGuidePage() {
  return (
    <div className={styles.container}>
      <h1>Size Guide</h1>

      <div>
        {/* Jeans Size Chart */}
        <section className={styles.sizeChartSection}>
          <h2>Jeans Size Chart</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Waist</th>
                  <th>Front Rise</th>
                  <th>Inseam</th>
                  <th>Leg Opening</th>
                  <th>Length</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>32</td>
                  <td>32" / 81.5cm</td>
                  <td>12.5" / 32cm</td>
                  <td>30" / 76cm</td>
                  <td>8.5" / 24cm</td>
                  <td>42" / 106.75cm</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>34" / 86.5cm</td>
                  <td>13" / 33cm</td>
                  <td>30" / 76cm</td>
                  <td>9" / 23cm</td>
                  <td>42" / 106.75cm</td>
                </tr>
                <tr>
                  <td>36</td>
                  <td>36" / 91.5cm</td>
                  <td>13.5" / 34.35cm</td>
                  <td>30" / 76cm</td>
                  <td>9.5" / 24.5cm</td>
                  <td>42" / 106.75cm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Trousers Size Chart */}
        <section className={styles.sizeChartSection}>
          <h2>Trousers Size Chart</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Measurement</th>
                  <th>Size 34</th>
                  <th>Size 36</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Waist</td>
                  <td>34"</td>
                  <td>36"</td>
                </tr>
                <tr>
                  <td>Hip</td>
                  <td>46"</td>
                  <td>48"</td>
                </tr>
                <tr>
                  <td>Thigh</td>
                  <td>13.5"</td>
                  <td>14"</td>
                </tr>
                <tr>
                  <td>Knee</td>
                  <td>9"</td>
                  <td>9.5"</td>
                </tr>
                <tr>
                  <td>Leg Opening</td>
                  <td>7"</td>
                  <td>7.5"</td>
                </tr>
                <tr>
                  <td>Out Seam</td>
                  <td>39"</td>
                  <td>40"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Shirts Size Chart */}
        <section className={styles.sizeChartSection}>
          <h2>Shirts Size Chart</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Chest Width</th>
                  <th>Sleeve Length</th>
                  <th>Front Length</th>
                  <th>Shoulder</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>S</td>
                  <td>58.5</td>
                  <td>26.5</td>
                  <td>70.5</td>
                  <td>17.9</td>
                </tr>
                <tr>
                  <td>M</td>
                  <td>61</td>
                  <td>26.5</td>
                  <td>71.5</td>
                  <td>18.8</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>64</td>
                  <td>26.5</td>
                  <td>73</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* T-Shirts Size Chart */}
        <section className={styles.sizeChartSection}>
          <h2>T-Shirts Size Chart</h2>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Length</th>
                  <th>Chest</th>
                  <th>Sleeve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>M</td>
                  <td>26"</td>
                  <td>23"</td>
                  <td>10"</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>27"</td>
                  <td>24"</td>
                  <td>10.5"</td>
                </tr>
                <tr>
                  <td>XL</td>
                  <td>28"</td>
                  <td>25"</td>
                  <td>10.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Measure Guide */}
        <section className={styles.measurementGuide}>
          <h2>How to Measure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3>Chest</h3>
              <p>
                Measure around the fullest part of your chest, keeping the
                measuring tape horizontal.
              </p>
            </div>
            <div>
              <h3>Waist</h3>
              <p>
                Measure around your natural waistline, keeping the tape
                comfortably loose.
              </p>
            </div>
            <div>
              <h3>Inseam</h3>
              <p>
                Measure from the crotch seam to the bottom of the leg, following
                the inside leg.
              </p>
            </div>
            <div>
              <h3>Sleeve Length</h3>
              <p>Measure from the shoulder seam to the end of the sleeve.</p>
            </div>
          </div>
        </section>

        {/* Conversion Note */}
        <div className={styles.conversionNote}>
          <p>
            All measurements are provided in both inches and centimeters where
            applicable. For the most accurate fit, we recommend measuring
            yourself or a similar garment that fits you well.
          </p>
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p>
            Please note that these measurements are approximate and may vary
            slightly due to the manufacturing process. If you're between sizes,
            we recommend choosing the larger size for a more comfortable fit.
          </p>
        </div>
      </div>
    </div>
  );
}
