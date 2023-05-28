
APLICAȚIE DE CHAT CU INTERFAȚA USER-FRIENDLY

PROIECT TRANSMISIA DATELOR




Cuprins

CAPITOLUL 1 - INTRODUCERE	2
1.1	CONTEXTUL PROIECTULUI	2
1.2	OBIECTIVE	2
1.3	SPECIFICATII ȘI DETALII PRINCIPALE	2
CAPITOLUL 2 – DESCRIEREA APLICATIEI	2
CAPITOLUL 3 IMPLEMENTAREA APLICATIEI	2
CAPITOLUL 4 TESTAREA APLICATIEI	2
ANEXA 1 (COD SURSA)	2



 
1.	 INTRODUCERE
1.1	Contextul proiectului
Ideea proiectului nostru este dezvoltarea unei aplicații de chat în JavaScript. În era digitală în care trăim, comunicarea este un element esențial și tot mai multe interacțiuni se desfășoară online. Aplicația noastră de chat vine în întâmpinarea nevoii de comunicare rapidă și eficientă între utilizatori. Relevanța acestui proiect se manifestă în mai multe moduri. 
În primul rând, chat-ul este o modalitate de comunicare extrem de populară în mediul online, fiind folosit în diverse contexte, de la platforme sociale și aplicații de mesagerie până la asistență clienți și colaborare în echipă. O aplicație de chat bine dezvoltată și funcțională poate aduce beneficii semnificative în domenii precum servicii clienți, colaborare între echipe sau chiar în construirea comunităților online.
În al doilea rând, alegerea tehnologiei JavaScript în dezvoltarea aplicației de chat a fost simplă, deoarece JavaScript este unul dintre cele mai populare limbaje de programare pentru dezvoltarea web. Acesta este suportat pe o gamă largă de dispozitive și platforme, permițând astfel utilizatorilor să acceseze și să folosească aplicația noastră de chat în diverse medii.
Prin dezvoltarea acestei aplicații de chat în JavaScript, ne propunem să oferim o soluție simplă, ușor de utilizat și eficientă pentru comunicarea online. Ne dorim să aducem valoare utilizatorilor prin intermediul unei interfețe intuitive și a funcționalităților inovatoare. În acest fel, sperăm să îmbunătățim experiența de comunicare și să facilităm interacțiunile online într-un mod mai prietenos și mai eficient.
1.2	Obiective 
Aplicația noastră de chat în JavaScript are ca scop principal oferirea utilizatorilor unei modalități eficiente și prietenoase de a comunica online. Ne-am propus să rezolvăm nevoia de interacțiune în timp real, facilitând o experiență fluidă și plăcută utilizatorilor noștri. Obiectivele noastre au inclus îmbunătățirea experienței utilizatorilor prin intermediul unei interfețe intuitive și personalizabile, asigurarea unei comunicări rapide și eficiente, respectând în același timp securitatea și confidențialitatea datelor utilizatorilor. Am dezvoltat aplicația noastră astfel încât să fie adaptabilă la diverse medii și dispozitive, pentru a se potrivi nevoilor individuale ale utilizatorilor noștri. În ansamblu, aplicația noastră de chat în JavaScript aduce valoare prin îmbunătățirea experienței de comunicare online și facilitarea unei interacțiuni prietenoase și eficiente într-un domeniu tot mai digitalizat.

1.3	Specificații și detalii principale

1. Limbajul de programare: Pentru dezvoltarea aplicației, am folosit JavaScript (JS), un limbaj de programare popular și versatil.

2. Tehnologiile utilizate:
   - Frontend: Am implementat frontend-ul folosind React, un framework modern și puternic pentru dezvoltarea interfețelor de utilizator.
   - Backend: Pentru partea de backend, am folosit Node.js, un mediu de execuție JavaScript de tip server, care ne permite să construim aplicații scalabile și performante.

3. Stilizarea aplicației: Am ales să ne axăm pe o structură clasică de CSS pentru stilizarea aplicației, evitând utilizarea librăriilor precum Tailwind.

4. Funcționalitățile aplicației de chat:
-	Înregistrare (REGISTER): Utilizatorii pot crea un cont nou în aplicație, furnizând informațiile necesare, cum ar fi numele de utilizator și parola.
-	Autentificare (LOG IN): Utilizatorii pot accesa contul lor existent prin autentificare cu datele de logare corecte.
-	Setare imagine de profil (SET PROFILE PICTURE): Utilizatorii au posibilitatea de a-și seta o imagine de profil personalizată.
-	Ștergere cont (DELETE ACCOUNT): Utilizatorii pot șterge contul lor din aplicație, eliminându-și toate datele asociate.
-	Actualizare nume utilizator (UPDATE USER NAME): Utilizatorii pot modifica numele lor de utilizator în aplicație.
-	Conversații de chat (CHAT): Utilizatorii pot trimite mesaje către alți utilizatori, realizând conversații în timp real. Pentru implementare, am utilizat socket-uri pentru comunicarea în timp real între utilizatori.
-	Arhivare/Restaurare utilizator (ARCHIVE/UNARCHIVE USER): Utilizatorii pot arhiva sau restaura alte conturi de utilizator, permițându-le să gestioneze lista lor de contacte.
-	Deconectare (LOG OUT): Utilizatorii pot se deconecta din aplicație.

5. Bază de date: Pentru stocarea datelor, am utilizat MongoDB, iar pentru gestionarea acesteia, am folosit interfața Compass.

6. Gestionarea cererilor HTTP: Pentru efectuarea cererilor între frontend și backend, am utilizat biblioteca Axios.
2.	DESCRIEREA APLICAȚIEI

Aplicația noastră este o platformă de mesagerie online care permite utilizatorilor să se înregistreze și să comunice în timp real cu alte persoane. Aceasta oferă o interfață intuitivă și ușor de utilizat, cu funcționalități precum înregistrarea, autentificarea, setarea avatarului, gestionarea contactelor și schimbul de mesaje.
Pagina de înregistrare permite utilizatorilor noi să-și creeze un cont, introducând informațiile necesare, cum ar fi numele de utilizator, adresa de email și parola. După înregistrare, utilizatorul poate accesa pagina de autentificare pentru a se conecta la contul său. După autentificare, utilizatorul este redirecționat către pagina de setare a avatarului. Aici, utilizatorul poate alege unul dintre cele patru avataruri generate aleatoriu și poate seta imaginea selectată ca avatarul său de profil. După ce a selectat avatarul, utilizatorul poate intra în aplicație.
Pe pagina principală a aplicației, utilizatorii pot vedea o listă cu toate contactele disponibile, fiecare contact fiind reprezentat printr-o componentă separată ce conține numele utilizatorului, avatarul și un buton pentru arhivare (ștergere). De asemenea, există un câmp de căutare care permite utilizatorilor să filtreze contactele după nume. Contactele sunt preluate din baza de date a aplicației. Utilizatorii pot comunica în timp real prin intermediul paginii de chat. Atunci când un utilizator selectează un contact din lista de contacte, se deschide o fereastră de chat în care utilizatorii pot schimba mesaje. Mesajele sunt afișate în ordine cronologică și utilizatorii pot trimite și primi mesaje în timp real. Aplicația noastră oferă, de asemenea, posibilitatea de a arhiva contacte. Prin apăsarea butonului de arhivare, un contact este eliminat din lista de contacte principale și adăugat în lista de contacte arhivate. Utilizatorii pot vizualiza și gestiona contactele arhivate prin intermediul unui buton special.
3.	 IMPLEMENTAREA APLICATIEI 
1.	Înregistrarea în aplicație
Am început cu funcția de implementarea înregistrării în aplicație implică crearea unei pagini de înregistrare care conține câmpurile necesare pentru nume de utilizator, adresă de email și parolă. Datele introduse de utilizator sunt validate pentru a asigura corectitudinea și securitatea informațiilor. După validare, datele de înregistrare sunt trimise către server prin intermediul unei solicitări HTTP și sunt stocate într-o bază de date securizată. Pentru a proteja confidențialitatea utilizatorilor, parolele sunt criptate înainte de stocare. După finalizarea înregistrării cu succes, utilizatorului i se afișează un mesaj de confirmare și are posibilitatea să fie redirecționat către pagina de autentificare pentru a se conecta la contul nou creat. Toate aceste etape sunt esențiale pentru asigurarea securității și integrității datelor utilizatorilor în timpul procesului de înregistrare.
2.	Setarea avatarului
Apoi am lucrat la pagina de setare a avatarului, care oferă utilizatorului posibilitatea de a alege o imagine de profil personalizată pentru contul său. Pe această pagină, utilizatorul primește patru opțiuni de imagini generate aleatoriu, preluate de pe site-ul `https://api.multiavatar.com/4645646`. Utilizatorul poate alege dintre aceste imagini făcând clic pe imaginea selectată. După selectarea imaginii dorite, aceasta va deveni noul avatar al utilizatorului. Prin apăsarea butonului "Setează imaginea de profil", utilizatorul finalizează procesul de setare a avatarului și este redirecționat către aplicație pentru a începe utilizarea serviciului. Această funcționalitate permite utilizatorilor să personalizeze și să aducă un plus de identitate contului lor, prin alegerea unei imagini reprezentative sau amuzante. 
     3. Frontend
	Frontend-ul gestionează încărcarea imaginilor de avatar, selectarea unui avatar și setarea acestuia ca imagine de profil pentru utilizator. O să trecem pe scurt prin toate importurile și variabilele declarate în componenta React.

Importurile din codul nostru, necesare pentru funcționalitatea și comportamentul componentei `SetAvatar`.
- `React`: Este importul pentru biblioteca React, care este utilizată pentru crearea și gestionarea componentelor React.
- `useEffect`: Este un hook din React care permite gestionarea efectelor laterale (side effects) în componente funcționale. Este utilizat pentru a realiza operații secundare, cum ar fi efectuarea de cereri HTTP sau abonarea la evenimente.
- `useState`: Este un hook din React care permite utilizarea stării în componente funcționale. Este utilizat pentru a declara și actualiza starea componentei.
- `styled`: Este importul pentru biblioteca styled-components. Acesta permite definirea și utilizarea de componente stilizate în React, prin intermediul cărora stilurile CSS pot fi definite direct în componenta React.
- `axios`: Este o bibliotecă populară utilizată pentru a realiza cereri HTTP către un server. Aceasta oferă o sintaxă simplă și intuitivă pentru a realiza operații de rețea în aplicații web.
- `Buffer`: Este importul pentru clasa `Buffer` din Node.js. Clasa `Buffer` este utilizată pentru a manipula și transforma date binare, cum ar fi imagini sau alte fișiere.
- `ToastContainer` și `toast`: Acestea sunt importurile pentru biblioteca `react-toastify`, care permite afișarea notificărilor de tip toast în interfața utilizatorului. Aceste notificări sunt mesaje temporare care apar într-un colț al ecranului și oferă informații sau feedback utilizatorului.
- `useNavigate`: Este un hook din biblioteca `react-router-dom` care permite redirecționarea utilizatorului către alte pagini în aplicație. Este util pentru navigarea între diferite rute sau componente în cadrul unei aplicații React.
- `setAvatarRoute`: Aceasta este o constantă care reprezintă ruta către backend pentru a seta avatarul utilizatorului. Este posibil să fie definită într-un alt fișier care conține rutele API ale aplicației.
- `loadingGif`: Este o cale către o imagine GIF utilizată pentru a afișa o animație de încărcare în interfața utilizatorului. Aceasta este afișată în timp ce se încarcă imaginile de avatar sau alte conținuturi asincrone pentru a indica utilizatorului că procesul este în desfășurare.
Componenta `SetAvatar` utilizează hook-urile `useState` și `useEffect` pentru a gestiona stările și efectele în React. Aceasta permite utilizatorului să selecteze un avatar dintr-o listă generată aleatoriu și să-l seteze ca imagine de profil. În cadrul componentei, se încarcă imagini de avatar generate aleatoriu utilizând biblioteca `axios` și se stochează în starea `avatars`. Utilizatorul poate selecta unul dintre aceste avatare, iar indexul acestuia este ținut în starea `selectedAvatar`.
Atunci când utilizatorul apasă butonul "Set as Profile Picture", se face o cerere către backend pentru a seta imaginea de profil. Dacă această acțiune este realizată cu succes, utilizatorul este redirecționat către pagina principală. În caz contrar, se afișează o notificare de eroare.
Componenta gestionează, de asemenea, starea `loading`, care indică dacă imaginile de avatar sunt încărcate sau nu. În timpul încărcării, se afișează o animație de încărcare. Odată ce imaginile sunt încărcate, utilizatorul poate vizualiza și selecta avatarele. Această componentă oferă o interfață simplă și intuitivă pentru utilizatorul de a-și seta imaginea de profil folosind unul dintre avatarele generate aleatoriu.

4.	Backend
REGISTER
	Funcția `register` din modulul de backend este responsabilă pentru înregistrarea unui utilizator nou în aplicație. Aceasta primește un obiect `req` care conține datele utilizatorului (nume de utilizator, adresă de email și parolă) și un obiect `res` pentru a trimite răspunsul către client. În funcție de datele primite, funcția verifică dacă există deja un utilizator cu același nume de utilizator sau aceeași adresă de email în baza de date. Dacă da, se returnează un mesaj de eroare corespunzător.
În caz contrar, parola este criptată utilizând funcția `bcrypt.hash` pentru a asigura securitatea. Apoi, este creat un nou obiect `User` în baza de date, utilizând datele primite și parola criptată.
Din motive de securitate, parola utilizatorului este eliminată din obiectul `user` returnat în răspunsul către client.
La final, funcția returnează un răspuns JSON care indică faptul că înregistrarea a fost realizată cu succes, împreună cu obiectul `user` care conține informațiile utilizatorului nou înregistrat. 
 
5.	Log-In
Funcția `login` din modulul de backend este responsabilă pentru procesul de autentificare a unui utilizator în aplicație. Aceasta primește un obiect `req` care conține datele utilizatorului (nume de utilizator și parolă) și un obiect `res` pentru a trimite răspunsul către client. În funcție de datele primite, funcția caută în baza de date un utilizator cu numele de utilizator specificat. Dacă nu se găsește un astfel de utilizator, se returnează un mesaj de eroare care indică că numele de utilizator sau parola introduse sunt incorecte.
În cazul în care utilizatorul este găsit în baza de date, funcția compară parola introdusă de utilizator cu parola stocată în baza de date utilizând funcția `bcrypt.compare`. Dacă parolele nu se potrivesc, se returnează un mesaj de eroare similar, indicând că numele de utilizator sau parola introduse sunt incorecte. Din motive de securitate, parola utilizatorului este eliminată din obiectul `user` returnat în răspunsul către client.
La final, funcția returnează un răspuns JSON care indică faptul că autentificarea a fost realizată cu succes, împreună cu obiectul `user` care conține informațiile utilizatorului autentificat.
6.	Log-Out
Funcționalitatea de "Logout" permite utilizatorului să se deconecteze din aplicație. Pe partea de backend, există o rută numită `logOut` care primește ID-ul utilizatorului ca parametru. În această rută, utilizatorul este eliminat dintr-un set sau o listă (`onlineUsers`) care reține utilizatorii conectați. Apoi, se returnează un răspuns cu codul de stare 200 pentru a indica că deconectarea a fost realizată cu succes.
Pe partea de frontend, în componenta `ChatInput`, există un buton "Logout" care permite utilizatorului să se deconecteze. Atunci când utilizatorul apasă butonul, se apelează funcția `handleLogout`, care face o cerere către backend pentru a executa deconectarea utilizatorului.
7.	Descrierea paginii principale
Pe pagina principală a aplicației avem o listă cu toate contactele valabile. Fiecare contact este reprezentat printr-o componentă separată numită "Contact", care conține un buton de ștergere (arhivare), avatar și numele utilizatorului. Avem și un câmp de căutare (search bar) care permite filtrarea contactelor după nume și afișarea doar a celor care se potrivesc. Filtrarea se face în partea de frontend, utilizând funcția `handleSearch` din fișierul "contacts.jsx". Această funcție preia termenul de căutare introdus și filtrează lista de contacte pentru a afișa doar cele care au numele potrivite și nu sunt arhivate.
Contactele sunt preluate din baza de date a backend-ului utilizând funcția `getAllUsers`. Aceasta găsește toți utilizatorii înregistrati, cu excepția utilizatorului curent, și returnează o listă care conține doar câmpurile "email", "username", "avatarImage" și "_id".
Există și un buton pentru a vizualiza utilizatorii arhivați. Atunci când utilizatorul dorește să șteargă un contact (prin apăsarea butonului de ștergere), acesta este arhivat și eliminat din lista curentă de contacte. Contactul arhivat este adăugat într-o listă separată numită "archivedContacts". În funcția `handleDeleteUser`, se verifică dacă contactul este deja arhivat înainte de a-l adăuga și se actualizează listele de contacte non-arhivate și afișate în consecință. Dacă chatul curent este cu contactul șters, acesta se închide.
De asemenea, avem și funcția `handleUnarchiveUser` care este responsabilă pentru anularea arhivării unui contact. Contactul arhivat este eliminat din lista "archivedContacts" și adăugat în lista de contacte non-arhivate și afișate.
În cazul în care nu există utilizatori arhivați, se afișează un mesaj că nu există utilizatori arhivați disponibili.

8.	Componenta CHAT
Componenta Chat gestionează conversația între utilizator și contactul selectat. Ea permite trimiterea și primirea mesajelor, afișându-le în timp real. Funcționalitățile includ încărcarea mesajelor anterioare, trimiterea mesajelor către server și salvarea lor în baza de date, precum și afișarea mesajelor primite de la contact. Interfața de chat include antetul conversației, mesajele afișate și un input pentru trimiterea de mesaje.

- `useEffect` cu dependența `currentChat` este responsabil pentru încărcarea mesajelor anterioare din baza de date atunci când se schimbă contactul curent. Aceasta face o solicitare către backend pentru a obține mesajele și le setează în starea `messages`.
- `useEffect` cu dependența `currentChat` verifică dacă contactul curent există și ascunde mesajul de bun venit.
- Funcția `handleSendMsg` se ocupă de trimiterea unui mesaj către contactul curent. Utilizează socket-ul pentru a emite evenimentul "send-msg" către server, împreună cu informațiile despre mesaj (destinatar, expeditor și conținut). De asemenea, face o solicitare către backend pentru a salva mesajul în baza de date. Noul mesaj trimis de utilizator este adăugat în starea `messages`.
- `useEffect` cu dependența `socket.current` ascultă evenimentul "msg-recieve" de la server și actualizează starea `arrivalMessage` cu noul mesaj primit.
- `useEffect` cu dependența `arrivalMessage` adaugă mesajul primit în starea `messages`.
- `useEffect` cu dependența `messages` asigură că fereastra de chat se va derula automat către ultimul mesaj afișat.
Componenta returnează elementele UI ale paginii de chat, cum ar fi antetul conversației, mesajele afișate și inputul pentru trimiterea de mesaje. În funcție de starea `showWelcome`, se afișează fie mesajul de bun venit și butonul pentru a reveni la chat, fie antetul și mesajele propriu-zise ale conversației. 
Biblioteca UUID este folosit pentru a genera identificatori unici pentru fiecare mesaj în componenta Chat. Acești identificatori asigură că fiecare mesaj are o cheie unică și ajută la gestionarea mesajelor în aplicație.
9.	Header
Header-ul este o componentă importantă în cadrul aplicației și oferă funcționalități precum afișarea logo-ului și butoanelor de navigare. În acest caz, avem două tipuri de butoane: butonul de utilizator și butonul de logout.
Butoanele de utilizator sunt afișate pe baza locației curente a paginii. Dacă ne aflăm într-o pagină diferită de "user/profile", va fi afișat butonul de utilizator care, la apăsare, te va redirecționa către pagina de profil a utilizatorului. Această pagină de profil conține informații precum avatarul, numele utilizatorului și două butoane de actualizare și ștergere a contului.
Butoanele de actualizare și ștergere a contului sunt legate de backend și efectuează solicitări către server pentru a actualiza sau șterge informațiile utilizatorului din baza de date. Butonul de actualizare permite modificarea numelui utilizatorului prin intermediul unui câmp de intrare (input) care acceptă un șir de caractere și salvează modificările prin apăsarea butonului "Save". Butonul de ștergere va șterge contul utilizatorului din baza de date și va redirecționa către o pagină care anunță faptul că contul a fost șters.
Pe lângă butonul de utilizator, există și butonul de logout, care oferă posibilitatea de a te deconecta din aplicație. La apăsarea acestui buton, vei fi redirecționat către pagina de autentificare, unde poți efectua o nouă autentificare pentru a accesa aplicația.

10.	Operațiile de ștergere și actualizare a numelui
Pentru operația de ștergere a contului, există o funcție numită `handleDeleteAccount` care este apelată la apăsarea butonului de ștergere. În această funcție, se extrage ID-ul utilizatorului din stocarea locală și se face o cerere HTTP de tip DELETE către backend pentru a șterge contul. Dacă răspunsul este cu succes, se realizează o redirecționare către pagina "account-deleted" care anunță utilizatorul că contul a fost șters.
Pentru operația de actualizare a numelui utilizatorului, există o funcție numită `handleSave` care este apelată la apăsarea butonului de salvare. În această funcție, se extrage ID-ul utilizatorului din stocarea locală și se face o cerere HTTP de tip PUT către backend pentru a actualiza numele utilizatorului cu noul nume introdus. Dacă răspunsul este cu succes, se actualizează numele utilizatorului în aplicație.
Pe partea de backend, există două rute definite în API-ul pentru a trata aceste operații. Ruta `deleteAccount` primește ID-ul utilizatorului și utilizează metoda `findByIdAndDelete` pentru a șterge utilizatorul din baza de date. Ruta `updateName` primește ID-ul utilizatorului și noul nume și utilizează metoda `findByIdAndUpdate` pentru a actualiza numele utilizatorului în baza de date.
În ambele cazuri, dacă utilizatorul nu este găsit în baza de date, se va returna un răspuns cu mesajul "User not found" și statusul false. Altfel, se va returna un răspuns cu statusul true și, în cazul operației de actualizare, se va trimite și utilizatorul actualizat.

11.	Welcome page
Pagina de "Welcome" este o componentă simplă care afișează un mesaj de bun venit utilizatorului. Componenta utilizează o imagine GIF cu o pisică animată (`HiWave`) și afișează un mesaj de bun venit, însoțit de numele utilizatorului preluat din stocarea locală. 
Această pagină de bun venit este afișată utilizatorului când deschide aplicația pentru prima dată sau când se conectează după deconectare. Scopul ei este să ofere o introducere plăcută și să încurajeze utilizatorul să selecteze o conversație pentru a începe să trimită mesaje.

12.	Mesageria
Funcțiile de backend `getMessages` și `addMessage` sunt responsabile de gestionarea mesajelor în aplicația de chat. Funcția `getMessages` primește doi utilizatori și returnează mesajele existente între ei, sortate în ordine cronologică. În schimb, funcția `addMessage` adaugă un mesaj nou în baza de date, specificând expeditorul și destinatarul mesajului. Aceste funcții permit comunicarea eficientă între frontend și backend pentru a afișa și a adăuga mesaje în cadrul aplicației de chat.



13.	Funcționalități și îmbunătățiri

Pentru viitoarele îmbunătățiri în aplicația noastră, avem planificate următoarele:

1. Arhivarea conversațiilor: Vom permite utilizatorilor să archiveze conversațiile fără a se deschide chatul respectiv. Astfel, conversațiile vor fi arhivate și utilizatorii vor fi redirecționați către pagina <Welcome>.
2. Gestionarea mesajelor lungi: Vom implementa un mecanism de scroll pentru a afișa mesajele lungi în mod corespunzător în cadrul Chat Container, evitând supraaglomerarea paginii.
3. Îmbunătățirea aspectului dezarhivării contactelor: Vom ajusta stilizarea pentru a asigura o prezentare coerentă și plăcută atunci când utilizatorii dezarhivează contactele.
Aceste implementări vor aduce funcționalități noi și îmbunătățiri estetice, oferind utilizatorilor o experiență îmbunătățită în utilizarea aplicației noastre. 

14.	TESTAREA APLICATIEI
Testarea aplicației este o etapă crucială în procesul de dezvoltare software. Pentru a asigura funcționalitatea corectă și experiența plăcută a utilizatorilor, este important să parcurgem diverse cazuri de testare.

În cadrul aplicației noastre, am realizat următoarele teste:

1. Testarea funcționalității de bază: Am verificat dacă utilizatorii pot trimite și primi mesaje cu success și am testat interacțiunea între utilizatori, asigurându-ne că mesajele sunt afișate în ordinea corectă și că se pot desfășura conversații fără probleme.
2. Testarea cazurilor limită: Am examinat cum se comportă aplicația în situații neașteptate. Am testat, de exemplu, cazurile în care un utilizator trimite un mesaj gol, fără caractere, sau în care nu există mesaje între utilizatori. Am verificat dacă aplicația gestionează corect aceste situații și furnizează mesaje de eroare sau feedback adecvat.
3. Testarea funcționalităților avansate: Dacă aplicația include funcționalități complexe, cum ar fi actualizarea numelui utilizatorului sau ștergerea unui cont, le testăm individual. Verificăm dacă modificările se reflectă corect în interfață și în baza de date și dacă acțiunile sunt realizate cu succes.
4. Testarea compatibilității și responsivității: Am verificat dacă aplicația funcționează corespunzător pe diferite browsere și dispositive și am testat adaptabilitatea interfeței la diferite dimensiuni de ecran, asigurându-ne că utilizatorii pot accesa și utiliza aplicația în mod confortabil.

În timpul dezvoltării aplicației, au apărut diverse erori și provocări pe care am încercat să le eliminăm de-a lungul implementării. De exemplu, am putut întâmpina erori de conectivitate între frontend și backend, probleme de securitate sau erori de validare a datelor. Pentru a trata aceste probleme, am utilizat metode de depanare și testare riguroasă. Am verificat erorile în consolă, am folosit instrumente precum console.log() și am implementat capturi de erori pentru a gestiona situațiile neprevăzute.

În final, prin testarea atentă a aplicației și identificarea și rezolvarea erorilor înainte de finalizare, am asigurat o experiență de utilizare consistentă și fără probleme. Testarea continuă și feedback-ul din timpul implementarii, pas cu pas, ne-au ajutat să aducem îmbunătățiri și să creștem calitatea și performanța aplicației noastre.



