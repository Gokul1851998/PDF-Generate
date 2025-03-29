import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Font,
  Image,
} from "@react-pdf/renderer";

// Register Arabic font
Font.register({
  family: "Amiri",
  src: "https://fonts.gstatic.com/ea/amiri/v6/Amiri-Regular.ttf",
});

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 10, position: "relative" },
  container: { width: "100%" },
  arabicText: { fontSize: 14, fontFamily: "Amiri", textAlign: "center", marginBottom: 2 },
  englishText: { fontSize: 14, fontWeight: "bold", textAlign: "center", marginBottom: 2 },
  subHeaderText: { fontSize: 8, textAlign: "center", marginBottom: 2 },

  // Key-Value Section
  keyValueContainer: { width: "100%", flexDirection: "row", paddingLeft: 20, marginTop: 10 },
  column: { width: "50%", flexDirection: "column" },
  keyValueText: { fontSize: 10, textAlign: "left", marginBottom: 2 },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#06134B",
    color: "white",
    padding: 10,
  },
  logoContainer: { flex: 1, alignItems: "flex-start" },
  titleContainer: { flex: 2, alignItems: "center" },


  // Table Styles
  tableContainer: { marginTop: 20, borderWidth: 1, borderColor: "#000" },
  tableRow: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#000" },
  tableHeader: { backgroundColor: "#e4e4e4", fontWeight: "bold" },
  tableCell: {
    fontSize: 8,
    padding: 4,
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#000",
    textAlign: "center",
  },
  logo: { width: 30, height: 30, marginRight: 5 },
  footer: {
    marginTop: "auto", // Pushes footer to the bottom
    textAlign: "center",
    padding: 5,
    borderTopWidth: 1,
    borderTopColor: "#000",
  },
  footerText: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 2,
  },
});

// Sample Data
const data = [
  {
    "W/H No.": "WH001",
    "ITEM CODE": "ITM001",
    DESCRIPTION: "Product A",
    PACKING: "12 x 500ml",
    QUANTITY: 120,
    CTN: 10,
    BOX: 2,
    RATE: 50.0,
    "DISCOUNT AMOUNT": 5.0,
  },
  {
    "W/H No.": "WH002",
    "ITEM CODE": "ITM002",
    DESCRIPTION: "Product B",
    PACKING: "24 x 1L",
    QUANTITY: 240,
    CTN: 20,
    BOX: 5,
    RATE: 100.0,
    "DISCOUNT AMOUNT": 10.0,
  },
  {
    "W/H No.": "WH003",
    "ITEM CODE": "ITM003",
    DESCRIPTION: "Product C",
    PACKING: "6 x 2L",
    QUANTITY: 60,
    CTN: 5,
    BOX: 1,
    RATE: 75.0,
    "DISCOUNT AMOUNT": 7.5,
  },
  {
    "W/H No.": "WH004",
    "ITEM CODE": "ITM004",
    DESCRIPTION: "Product D",
    PACKING: "8 x 250ml",
    QUANTITY: 80,
    CTN: 7,
    BOX: 3,
    RATE: 40.0,
    "DISCOUNT AMOUNT": 4.0,
  },
  {
    "W/H No.": "WH005",
    "ITEM CODE": "ITM005",
    DESCRIPTION: "Product E",
    PACKING: "10 x 750ml",
    QUANTITY: 100,
    CTN: 9,
    BOX: 2,
    RATE: 55.0,
    "DISCOUNT AMOUNT": 5.5,
  },
];

// PDF Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.headerContainer}>
  <View style={styles.logoContainer}>
    <Image
      src={`${window.location.origin}/Images/sangsolution.png`}
      style={styles.logo}
    />
  </View>
  <View style={styles.titleContainer}>
    <Text style={styles.englishText}>VANSALES</Text>
  </View>
</View>


        <Text style={styles.arabicText}>
          شركة راستي لاري للتجارة العامة ذ.م.م (فرع)
        </Text>
        <Text style={styles.englishText}>
          RASTI LARI GENERAL TRADING CO. L.L.C (Br.)
        </Text>
        <Text style={styles.subHeaderText}>
          Tel.: 2291150, WH.Tel.: 3479590, Fax: 2257800, P.O. Box – 65440,
          Dubai-U.A.E.
        </Text>
        <Text style={styles.subHeaderText}>
          E-mail: rasti@rastilari.com, Web: www.rastilari.com
        </Text>

        {/* Key-Value Section */}
        <View style={styles.keyValueContainer}>
          {/* Column for Keys */}
          <View style={styles.column}>
            <Text style={styles.keyValueText}>A/C NO.</Text>
            <Text style={styles.keyValueText}>Cust. Name</Text>
            <Text style={styles.keyValueText}>Cust. TRN</Text>
            <Text style={styles.keyValueText}>Mob.</Text>
            <Text style={styles.keyValueText}>Tel.</Text>
            <Text style={styles.keyValueText}>Tel.</Text>
            <Text style={styles.keyValueText}>Fax</Text>
          </View>

          {/* Column for Values */}
          <View style={styles.column}>
            <Text style={styles.keyValueText}>: 123456789</Text>
            <Text style={styles.keyValueText}>: John Doe</Text>
            <Text style={styles.keyValueText}>: TRN-987654321</Text>
            <Text style={styles.keyValueText}>: +971 50 123 4567</Text>
            <Text style={styles.keyValueText}>: +971 4 229 1150</Text>
            <Text style={styles.keyValueText}>: +971 4 225 7800</Text>
            <Text style={styles.keyValueText}>: DRL-LONH</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.keyValueText}>TRN</Text>
            <Text style={styles.keyValueText}>Excise</Text>
            <Text style={styles.keyValueText}>Order Doc No</Text>
            <Text style={styles.keyValueText}>Date</Text>
            <Text style={styles.keyValueText}>Salesman Name</Text>
            <Text style={styles.keyValueText}>Location</Text>
            <Text style={styles.keyValueText}>PlaceOfSupply Name</Text>
          </View>

          {/* Column for Values */}
          <View style={styles.column}>
            <Text style={styles.keyValueText}>: 100282930500003</Text>
            <Text style={styles.keyValueText}>: 100073677500007</Text>
            <Text style={styles.keyValueText}>: TRN-987654321</Text>
            <Text style={styles.keyValueText}>: 26/03/2025</Text>
            <Text style={styles.keyValueText}>: Gokul</Text>
            <Text style={styles.keyValueText}>: Kannur</Text>
            <Text style={styles.keyValueText}>: TFR-PRO</Text>
          </View>
        </View>

        {/* Table Section */}
        <View style={styles.tableContainer}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.tableHeader]}>
            {Object.keys(data[0]).map((key, index) => (
              <Text key={index} style={styles.tableCell}>
                {key}
              </Text>
            ))}
          </View>

          {/* Table Rows */}
          {data.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {Object.values(row).map((value, colIndex) => (
                <Text key={colIndex} style={styles.tableCell}>
                  {value}
                </Text>
              ))}
            </View>
          ))}
        </View>
        </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Thank you for your business! For any inquiries, contact us at
            rasti@rastilari.com
          </Text>
          <Text style={styles.footerText}>
            This is a system-generated invoice. No signature required.
          </Text>
        </View>
    
    </Page>
  </Document>
);

const App = () => {
  const viewPDF = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  return (
    <div>
      <button onClick={viewPDF}>View PDF</button>
    </div>
  );
};

export default App;
