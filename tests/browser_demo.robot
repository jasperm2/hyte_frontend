*** Settings ***
Library     Browser    auto_closing_level=KEEP
Resource    Keywords.robot

*** Test Cases ***
Oman sivun kirjautumistesti
    New Browser    chromium    headless=No
    New Page       http://localhost:5173/login.html
    Get Title      ==    MedCheck
    Type Text      [id="loginUsername"]        ${Username}    delay=0.1 s
    Type Secret    [id="loginPassword"]    $Password  delay=0.1 s
    Click With Options    [id="ksis"]    delay=2 s

