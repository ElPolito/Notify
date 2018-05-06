# Notify
Notify est une bibliothèque Javascript permettant de faire apparaitre des notifications sur vos pages HTML.

## Intégration
Pour intégrer Notify dans vos pages HTML ajoutez les deux lignes suivantes dans la balise Head :
```
<script type="text/javascript" src="Notify.js"></script>
<link rel="stylesheet" href="Notify.css"/>
```
C'est tout vous pouvez maintenant commencer !

## Envoyer votre première notification
Pour envoyer un notification, il suffit d'appeler la fonction **sendNotification** comme ceci :
```
<script type="text/javascript">
	sendNotification ( "Ma première notification" );
</script>
```
C'est tout !

## Personnaliser vos notifications
La fonction sendNotifiaction peut prendre plus de paramètres que seulement le texte qui sera affiché.
En effet, vous pouvez ajouter le type de notification, par défaut il est sur un type neutre mais il existe aussi le type "error" et le type "success" et rien ne vous empêche d'en créer de nouveau. Le troisième paramètre correspond au temps durant lequel la notification sera affichée avant de disparaitre, par défaut ce temps est de 5 secondes, vous pouvez mettre un temps infini en mettant "NONE".
Le quatrième paramètre est le thème de la notification il existe deux thèmes prédéfinis : defaultTheme et squareTheme. Le dernier paramètre correspond à la position de la notification si le thème est squareTheme il peut prendre la valeur bottomLeft, bottomRight, topLeft et topRight.

### Exemple
```
<script type="text/javascript">
	sendNotification ( "Ma notification personnalisée", "success", "NONE", squareTheme, bottomLeft );
</script>
```



