ITQAN QURAN v8 (application web installable, PWA)
Nouveau : recherche des sourates, filtre "Appris seulement", compteur de progression (%, sourates terminées, série de jours), mode hors connexion après la 1re visite (sourates déjà ouvertes), traduction FR/EN/AR, mots reconnus/non reconnus en couleur.
ESSAYER SUR TÉLÉPHONE : glisse ce dossier sur https://app.netlify.com/drop (HTTPS gratuit), ouvre le lien dans Chrome, menu ⋮ > Installer l'application.
PLAY STORE : https://www.pwabuilder.com avec ton lien Netlify > Package for stores > Android > fichier .aab.
LIMITES : la vérification compare des mots, pas le Tajwid. Vérifie les droits du texte (alquran.cloud) et de l'audio (Alafasy / islamic.network) avant publication.

v8 : audio enregistrable hors ligne (par sourate, ~1 Mo/10 s : attention aux longues sourates) ; comparaison alignée mot à mot avec mots « proches » et indices sur les lettres confondues (ق/ك, ح/ه, ص/س…) ; repères madd/ghunnah lus dans le texte. Le Tajwid n'est toujours pas validé par l'app.

Si la page s'affiche sans style (ouverte depuis le gestionnaire de fichiers), utilise ITQAN_QURAN_fichier_unique.html pour un aperçu. Micro, installation et audio hors ligne exigent un hébergement HTTPS.

v8 : nouveau design (écran de langue, accueil à tuiles, liste, récitation, Tajwid, progression, réglages) d'après la maquette.

v9 : récitation complète avec bouton Corriger (correction + audio des versets à revoir), téléchargement hors ligne par sourate (texte + audio) depuis la liste ou la page de lecture.

v10 : mode écoute (tuile Le Coran) avec lecture continue, précédent/suivant et répétition de verset ; mode Réciter séparé ; téléchargement hors ligne plus robuste (3 essais, repli no-cors) ; service worker v10.

v11 : micro corrigé. « Verset par verset » : un toucher lance la dictée, elle s’arrête seule quand le verset est terminé (ou après un silence) puis corrige. « Récitation complète » : elle attend jusqu’à ce que tu touches ⏹ ou « Corriger ».
