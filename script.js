const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const askSection = document.getElementById('askSection');
const resultSection = document.getElementById('resultSection');

let scale = 1;
let count = 0;

const moveButton = (e) => {
    if (e.type === 'touchstart') e.preventDefault();

    count++;

    // 5. kez kaçmaya çalışırsa
    if (count >= 5) {
        noBtn.style.display = 'none'; // Hayır butonunu sil
        yesBtn.style.position = 'fixed'; // Evet butonunu serbest bırak
        yesBtn.style.top = '0';
        yesBtn.style.left = '0';
        yesBtn.style.width = '100vw'; // Ekran genişliğini kapla
        yesBtn.style.height = '100vh'; // Ekran yüksekliğini kapla
        yesBtn.style.fontSize = '3rem'; // Yazıyı büyüt
        yesBtn.style.zIndex = '1000';
        yesBtn.style.borderRadius = '0'; // Köşeleri sıfırla
        yesBtn.innerHTML = "AFFET BE"; // Yazıyı değiştir (isteğe bağlı)
        return;
    }

    noBtn.style.position = 'fixed';

    const padding = 30;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';

    // Normal büyüme (ilk 4 kaçış için)
    scale += 0.8; 
    yesBtn.style.transform = `scale(${scale})`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    askSection.classList.add('hidden');
    noBtn.style.display = 'none'; 
    // Eğer buton ekranı kapladıysa stili sıfırla
    yesBtn.style.position = 'static';
    yesBtn.style.width = 'auto';
    yesBtn.style.height = 'auto';
    
    resultSection.classList.remove('hidden');
});