/* style.css */
:root {
  --primary: #0A5C36;
  --secondary: #D4AF37;
  --bg: #F0F8F0;
  --card: #FFFFFF;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', sans-serif;
  background: var(--bg);
  direction: rtl;
  padding-bottom: 80px;
}

.header {
  background: var(--primary);
  color: white;
  text-align: center;
  padding: 20px 15px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.header h1 { font-size: 26px; margin-bottom: 5px; }
.search {
  width: 95%;
  padding: 12px;
  margin: 10px auto;
  border-radius: 25px;
  border: 2px solid var(--primary);
  font-size: 18px;
  display: block;
}

.card {
  background: var(--card);
  margin: 15px;
  padding: 18px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-right: 4px solid var(--secondary);
}

.card h3 { color: var(--primary); margin-bottom: 8px; font-size: 20px; }
.arabic { font-size: 22px; color: #1A4D2E; font-weight: bold; margin: 8px 0; }
.source { color: #666; font-size: 14px; margin-top: 5px; }
.footer { text-align: center; padding: 20px; color: var(--primary); }
