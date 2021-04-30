---
title: "FLOSS: Why should we refuse the free aspect"
date: 2021-04-30T15:21:27.129Z
featuredBlog: false
author: Bruno Cornec
authorimage: https://fr.gravatar.com/userimage/201129415/0a6c68ddb1219897b7479544e601b0c9.jpg
---
In the 60's, nobody would ever consider providing a computer without the software needed to exploit it. That was the case of the mainframe or mini-computers which were systematically delivered with their Operating System, mandatory brick to have the hardware work. That software was also often provided with the sources required tp have a clear understanding of how all the whole was working (I started to work on a VAX 750 under Ultrix 1.0 back in 1987, which was delivered with the underlying Berkeley Unix sources).

With the introduction of the PC in the 80"s, slowly we've seen a split hapening between the hardware actors (evolving more and more towards standardization and cost reduction) and the software actors, the latter becoming more and more prominent par their specialization or the hegenomic domination

prépondérants par leur spécialisation ou leur domination
hégémonique ne permettant plus au marché de jouer un rôle de régulation. On a vu ceci depuis lors au niveau du système d'exploitation avec MS-DOS puis MS-Windows (écrasant la compétition sous forme de DR-DOS ou Xenix) comme
dans le domaine des bases de données par exemple avec Oracle (largement dominateur des Informix, Ingres, et autres acteurs de ce temps). Et puis dans ces mouvements de balancier dont l'informatique est coutumière
(centralisé/décentralisé, propriétaire/ouvert, client lourd/client léger, sur site/à distance ...) est revenue l'idée de fournir des logiciels avec leur code source au milieu des années 1980 avec la création du projet GNU
suivi rapidement en 1991 de la création de systèmes d'exploitation complets libres, Linux et FreeBSD.

Et en l'espace de 30 ans, ce modèle de logiciel libre et d'Open Source a "mangé le monde" (https://a16z.com/2011/08/20/why-software-is-eating-the-world/) selon l'expression du créateur de Netscape, Marc Andressen. Là où la
presse informatique traitait avec dédain le libre dans les années 1990 (https://fermigier.com/blog/1998/11/revue-presse/), il n'y a plus aujourd'hui de doute sur la capacité pour ces solutions de gérer l'Internet dans son
ensemble (Le est DNS géré à 85% par du logiciel libre http://mydns.bboy.net./survey/), d'être le système de contrôle dans l'espace (l'ordinateur SpaceBorne de l'ISS utilise Linux
https://www.hpe.com/us/en/compute/hpc/supercomputing/spaceborne.html, l'hélicoptère Ingeniosity sur Mars https://www.zdnet.fr/actualites/video-vers-l-infini-et-au-dela-linux-et-l-open-source-sont-sur-mars-39918287.htm) de
piloter les 500 plus puissants ordinateur du monde (https://hpc.developpez.com/actu/266678/Linux-alimente-desormais-tous-les-500-meilleurs-supercalculateurs-du-monde-d-apres-le-TOP500-de-juin-2019/).

Les raisons de ce succès sont multiples mais toutes proviennent de la disponibilité du code avec l'applicatif: cela permet de créer une communauté d'intérêt technique qui peut améliorer ce code, le porter sur des architectures
matérielles différentes, lui permettre de passer à l'échelle, d'enseigner les bonnes pratiques grâce à ces exemples, d'y apporter des ajouts, de l'interfacer avec d'autres solutions, ... Et il est sûr que pour un technologiste
chevronné, avoir accès à une telle base de logiciels que l'on peut gérer soi-même, installer, déployer et utiliser est idéal, d'autant qu'une fois son abonnement Internet payé, et le temps passé à être familier avec cet
écosystème et ces logiciels, il n'y a pas de coût de license et on se supporte soi-même en cas de problème rencontré.

On voit déjà que même pour ce type de population privilégiée techniquement, il y a un coût indirect: celui du temps passé pour contrôler ces logiciels libres. Cela se base sur la formation initiale et des dizaines d'heures
passées à lire des documentations (libres également pour la plupart), consulter des articles de blogs, lire du code, chercher son problème dans un système de suivi d'anomalie, ... Mais ce coût fait naturellement partie du
travail du technologiste dans sa volonté de rester à niveau dans son domaine, et il n'est donc que rarement comptabilisé et valorisé. Pour lui le logiciel libre est quasiment gratuit. J'estime avoir cette chance aprè 29 ans
passé dans ce milieu.

Mais pour le DSI qui doit rendre son informatique productive auprès de ses utilisateurs, pour le responsable de direction métier qui doit utiliser l'informatique pour améliorer la productivité de ses équipes, cela semble un
luxe lointain et inaccessible, et à cette apparente complexité d'un monde du logiciel libre divers et fortement technique, ils préfèrent souvent le confort de solutions que tout le monde utilise car on n'a jamais licencié
quelqu'un pour sa conformité. Seulement, voilà, la conformité est en train de changer de camp, le logiciel libre devient, comme dit plus haut, plus la norme que l'exception mais les compétences sont rares.

C'est ce qu'ont compris depuis longtemps les incubateurs du libre (https://brunocornec.wordpress.com/2012/11/03/dont-call-them-floss-editors-but-rather-floss-incubators/), ces sociétés qui se construisent pour développer,
enrichir, contribuer à une ou plusieurs briques logicielles libres. Les plus connus aujourd'hui sont sûrement ceux fournissant une distribution Linux (aggrégat d'un large ensemble cohérent de logiciels libres tournant sur un
noyau Linux) tels que Red Hat, SUSE ou Canonical. Mais il en existe bien d'autres comme, en France, Combodo, Enalean ou Worteks pour n'en citer que trois que je trouve très respectueuses des valeurs du libre. Ces acteurs ont
vite identifié que le modèle économique viable autour du libre ne pouvait reposer, pour simplifier, que sur la délivrance de services. Mais du service dans tous les domaines possibles. Ce qui  correspond précisément aux
interrogations de nos DSI et directeurs ci-dessus.

Car en effet, pour tirer profit du logiciel libre, ce qui implique un contrôle fort et fin sur son environnement informatique, il faut les compétences nécessaires, en codage, fabrication, encapsulation, administration système.
Et soit l'entreprise qui souhaite ce contrôle les embauches ou les fait grandir, soit elle va les chercher là où elles se trouvent, chez ces incubateurs spécialisés, en acceptant d'en payer le prix. Mais le seul prix du
service dont elle a besoin. Prix juste, puisque tout le monde ayant accès au code des logiciels en question la concurrence va faire en sorte qu'un prix moyen raisonnable va s'établir sur le marché. Et qui mieux qu'un
incubateur ayant des contributeurs actifs dans un projet pour apporter la compétence maximale en support, en formation, en évolution, en hébergement, en greffon, ...

Ces sociétés incubatrices permettent également à des clients d'avoir un contrat, sécurisant la relation commerciale, un partenariat technologique rendant l'utilisation des technologies libres plus fiables pour elles qui n'ont
souvent pas les moyens d'avoir des ressources internes dédiées et enfin des gains financiers importants sur les licences qui disparaissent de l'équation (avec leur cohorte de prix au Cœur/Thread qui les rendent vite prohibitive) qui sont réinvesti en partie sur les services de toute faàon indispensables à la mise en œuvre de solutions technique avancées, qu'elles soient libre ou non.

De plus, ces partenaires à taille humaine et avec un souci de suivre la philosophie du libre ne peuvent par construction se retrouver en position hégémonique et auront toujours à cœur de se distinguer par leurs qualités de
maîtrise technique et de haut niveau de service. Ceci a certes un prix, (comme celui d'avoir une équipe dédiée sur le sujet) mais c'est un investissement que DSI et directeurs métier doivent être prêts à payer pour reprendre
le contrôle de leur environnement informatique grâce aux solutions libres.