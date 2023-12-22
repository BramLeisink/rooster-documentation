---
title: Meeschrijven aan de documentatie
description: Hoe schrijf je mee met de documentatie en maak je een pull request?
---
Hoe schrijf je mee met de documentatie en maak je een pull request?

:::caution
Om structuur te behouden is het belangrijk om de regels en stappen te volgen, tenzij je precies weet wat je doet.
:::

## 1. GitHub Instellen:
- Ga naar [GitHub](https://github.com/) en maak een GitHub-account aan als je er nog geen hebt.
- Open de [Github-repository](https://github.com/BramLeisink/rooster-documentation) en Star⭐ deze, rechtsboven op de pagina.

## 2. Repo Forken:
- Ga naar de [Github-hoofdpagina](https://github.com/BramLeisink/rooster-documentation) van de repository die je wilt bewerken.
- Klik op de `Fork` knop rechtsboven in de repositorypagina. Hiermee maak je een kopie van de repo naar jouw GitHub-account.
- Houd de instelling gelijk en klik op `Create Fork`


## 3. Inhoud bewerken
- Klik op het mapje source
- Ga naar het mapje content, en dan docs
- Elk mapje dat nu te zien is, is een mapje op de uiteindelijke site.
- Zoek in een van de mapjes naar het juiste .md (MarkDown) bestand (of maak een nieuwe aan met `Add file`, let er op dat het een `.md` bestand is!)
- Klik op het podlootje rechts bovenin, nu kan je het bestand aanpassen.
- Meer informatie over de gebruikte MarkDownX syntax, is [hier](https://starlight.astro.build/guides/authoring-content/) te vinden. Lees dit goed door!

:::note
Gebruik als grootste kopje, kopje h2. Zo voorkom je conflicten met de pagina titel. De syntax ziet er als volgt uit:

```markdown
## My heading
```

:::

## 4. Aanpassingen opslaan
- Om de aanpassingen op je eigen versie van de site op te slaan, klik op rechtsbovenin op `Commit changes`.
- Schrijf een bijpassende omschrijving (Commit message), die vertelt wat je hebt veranderd.
- Klik nu op `Commit changes`.

## 5. Aanpassingen doorvoeren
Je hebt nu je eigen versie van de site aangepast. Om dit ook op de echte site aan te passen zijn nog een paar stappen nodig:
- Ga naar de repositorypagina van de Fork, dus in dit geval `https://github.com/myUsername/rooster-documentation`.
- Klik op `Contribute`, en daarna `Open pull request`
- Controleer of de gemaakte aanpassingen kloppen
- Wanneer dit zo is, klik op "Create pull request
- Omschrijf zo duidelijk mogelijk wat je hebt gedaan en waarom
- Klik op `Create pull request`

## Hoe nu verder?
Nadat er een pull request is aangemaakt, controleren anderen of de aanpassingen kloppen en de website het daarna nog doet. Als dit zo is worden de aanpassingen op de echte site doorgevoerd. Deze controle kan een dag duren.

## Algemene tips:
- Het kan zijn dat er aanpassingen worden gemaakt aan de echte repository. Deze worden niet automatisch doorgevoerd is jouw fork. Om dit te bereiken klik je op `Sync fork`.
- Voordat je een wijziging doorvoert, probeer deze op spelling te controleren. Scheelt later heel veel tijd.