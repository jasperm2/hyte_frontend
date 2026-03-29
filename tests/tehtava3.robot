*** Settings ***
Library    Browser    auto_closing_level=KEEP
Resource   teht3_keywords.robot

*** Test Cases ***
Test Diverse Web Form Fields
    New Browser    chromium    headless=No
    New Page       https://www.selenium.dev/selenium/web/web-form.html

    # 1. Dropdown (Select) - Valitaan tekstillä
    Select Options By    [name="my-select"]    text    Two

    # 2. Dropdown (Datalist) - Kirjoitetaan ja valitaan
    Fill Text      [name="my-datalist"]    New York

    # 3. Checkboxit - Valitaan ja varmistetaan tila
    Check Checkbox    id=my-check-1
    # Huom: Checkbox 2 on usein oletuksena valittu, voit poistaa valinnan:
    Uncheck Checkbox  id=my-check-2

    # 4. Radio buttonit - Valitaan id:n tai muun selektorin perusteella
    Click             id=my-radio-2

    # 5. File Input - Tiedoston lataaminen
    # Huom: Tiedoston pitää olla olemassa samassa kansiossa tai polku oikein
    Upload File By Selector    [name="my-file"]    Keywords.robot

    # 6. Color Picker & Date Picker (Esimerkkejä kirjoittamisesta)
    Fill Text      [name="my-colors"]    #ffffff
    Fill Text      [name="my-date"]      01/01/2026

    # Lähetys ja varmistus
    Click             button[type="submit"]
    Get Text          id=message    ==    Received!
