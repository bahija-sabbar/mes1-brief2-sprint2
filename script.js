// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

// À réaliser :
// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.
const formulaire= docemment.querySelector('#formulaire-participant');
const inputNom= docemment.querySelector('#nom');
const  erreurNom=document.querySelector('error');
let nbr=null;
function afficherParticipants() {
  formulaire.replaceChildren();
  const liste=docemment.creeElement('ul');
liste.className='participants';
 
 participants .forEach(participant => {
const li=docemment.creeElement('li');
li.className='participant';
const div=docemment.creeElement('div');
div.className='participant-info';
const span=docemment.creeElement('span');
span.className='participant-id';
span.textContent=participant.id;
div.appendChild(span);
const div1=docemment.creeElement('div');
const h3=docemment.creeElement('h3');
h3.className='participant-name';
h3.textContent=participant.nom;
const span2=docemment.creeElement('span');
span2.className='badge badge-inscrit';
span2.textContent=participant.statut;
div1.appendChild(h3);
div1.appendChild(span2);
div.appendChild(div1);
const div2=docemment.creeElement('div');
div2.className='participant-actions';
const btnEdit=docemment.creeElement('button');
btnEdit.className='button button-presence';
btnEdit.setAttribute('type','button');
// btnEdit.setAttribute('Aria-label',`marque ${participant.nom} ${participant.statut}`);
const btnDelete=docemment.creeElement('button');
btnDelete.className='button button-delete';
btnDelete.setAttribute('type','button');
// btnDelete.setAttribute('Aria-label',`Supprimer ${participant.nom} ${participant.statut}`);
div2.appendChild(btnEdit);
 div2.appendChild(btnDelete);
 li.appendChild(div);
 li.appendChild(div2);
 liste.appendChild(li);
});
formulaire.appendChild(liste);
}
afficherParticipants();

 formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  const nomValue = inputNom.value.trim();
  erreurNom.textContent = '';
  
  const nouveau = {
    id: nextId++,
    nom: nomValue,
    statut: 'Inscrit'
  };
  
  participants.push(nouveau);

  afficher();
  formulaire.reset();
 
 
});
afficherParticipants();



