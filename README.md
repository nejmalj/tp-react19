# How to run the project

cd tp-react19
npm install
npm run dev

# TODO:

1. État des lieux (React 18)

Observez le fichier App.jsx. Actuellement, nous gérons manuellement :

- L'état de l'input (useState).
- L'état de chargement (isPending).
- L'interception de l'événement (e.preventDefault).
- La récupération des données.

2. Étape 1 : Préparation de l'Action

En dehors du composant App, créez une fonction asynchrone nommée subscribeAction.

Arguments : Elle doit prendre (prevState, formData).

Logique : 
- Récupérez la valeur du champ email via formData.get("email"). 
- Simulez une attente de 1,5 seconde (simulant un appel API). 
- Retournez un objet contenant un message de succès (ex: { success: true, message: "Inscrit !" }).

3. Étape 2 : Mise en place de useActionState

Dans le composant App :

Supprimez tous les useState techniques (email, isPending, message).

Importez et utilisez le hook useActionState :
const [state, formAction, isPending] = useActionState(subscribeAction, { message: "" });


4. Étape 3 : Refactorisation du JSX

Le Formulaire : Remplacez onSubmit={handleSubmit} par action={formAction}.

L'Input : Supprimez value et onChange. Attention : Ajoutez impérativement l'attribut name="email" à votre balise <input>.

Le Bouton : Utilisez la variable isPending fournie par le hook pour gérer l'attribut disabled et le texte du bouton.

Le Message : Affichez le message de retour via state.message.