---
title: Auth
description: Een omschrijving van de Rooster-leeromgeving
---

Een schets voor het aanmelden, verifiëren en inloggen van gebruikers, op Rooster-ELO. Sommige van deze principes blijven gelden voor andere onderdelen zoals Rooster-Learn, maar hiervoor kan iedereen zich inschrijven. 

Veiligheid is een belangrijk punt, en daarom zijn de inlog opties gelimiteerd. Het wordt voor scholen onmogelijk (of in elk geval heel lastig) om leerlingen een envelop met inloggegevens te geven, dit is papier verspilling, onveilig en vooral onnodig. Scholen, of wie dan ook, zal dan ook nooit toegang hebben tot wachtwoorden en andere inloggegevens die prive moeten blijven.
Als een gebruiker diens wachtwoord vergeet, kan deze alsnog altijd gereset worden met de "wachtwoord vergeten" knop.
## Aanmelden
Dit zijn de manieren om nieuwe gebruikers in het systeem te zetten, de school kiest welke van toepassing is/zijn. De school kan ook kiezen of het nieuwe gebruikers toelaat, elke gebruiker door hen geverifieerd moet worden, of het aanmelden volledig van de site wordt gehaald. Als laatst kan de school automatisch elke gebruiker die met een mailadres dat niet van de school is probeert aan te melden niet toe te laten.

Aanmelden via mail lijkt mij het meest waterdichte en makkelijke systeem. Ook zou het de "Aanmelden" knop onnodig maken, en dit maakt de UI eenvoudiger.
### Vooraf aangemeld
Elke gebruiker wordt van te voren in het systeem gezet. Wanneer deze voor het eerst de site bezoekt zal gevraagd worden om diens e-mail. Hierna wordt er een verificatie mail gestuurd naar het opgegeven adres, vanuit daar kan de gebruiker een wachtwoord kiezen, en het instellen van hun account voltooien.
### Via mail
Hier wordt ook elke gebruiker van tevoren in het systeem gezet. De school kan er voor kiezen om elke niet-volledig aangemelde gebruiker een mailtje te sturen, waarna deze diens wachtwoord kan kiezen, en zo het instellen van hun account voltooid.
### Nieuw account
De gebruiker vult diens e-mail adres in. Hier wordt een verificatie mail naar gestuurd, en vanuit daar kan de gebruiker een wachtwoord kiezen. In de volgende stap moet de gebruiker diens persoonsgegevens invullen.
### Via Google/Microsoft account
Gebruikers kunnen ook aanmelden met hun Google/Microsoft account. Dit wijst zichzelf (voor mij dan)
## Inloggen 
Gebaseerd op de manier dat de gebruiker is aangemeld, zijn er 4 manieren om in te loggen.
### Met e-mail en wachtwoord 
De gebruiker vult hun gebruikersnaam en wachtwoord in, waarna deze ingelogd wordt.
### Met gebruikersnaam en wachtwoord 
De gebruikersnaam zal in veel gevallen een leerling nummer zijn. Nadat deze en het wachtwoord zijn ingevuld, kan de gebruiker inloggen.
### Met Google/Microsoft
Dit wijst zichzelf, de gebruiker logt in met een van deze diensten.
### Met 2-stap verificatie
Als de gebruiker (of de school) dit heeft ingesteld, volgt er een extra stap na het inloggen genoemd hierboven. Er moet eerst nog een code invuld worden om het inloggen te voltooien. De code krijgt de gebruiker via diens telefoon.