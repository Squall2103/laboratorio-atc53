// Data for all categories
const messages = {
    arr: [
        "[AFTN: (ARR-HP123AA-MPMG2100-MPBO2203)]",
        "[AFTN: (ARR-HP124AA-MPMG1930-MPBO2032)]",
        "[AFTN: (ARR-HP125AA-MPMG1900-MPBO2028)]",
        "[AFTN: (ARR-ALAS75-MPMG-MPSA1856)]",
        "[AFTN: (ARR-ALAS72-MPMG-MPGU1756)]",
        "[AFTN: (ARR-HP1401-MPMG-MPGU1615)]",
        "[AFTN: (ARR-HP7007-MPMG-MPPD1534)]",
        "[AFTN: (ARR-HP126AA-MPMG-MPPD1436)]",
        "[AFTN: (ARR-HP125AA-MPMG-MPPD1434)]",
        "[AFTN: (ARR-HP12V-MPMG-MPSA1347)]",
        "[AFTN: (ARR-HP2464K-MPMG-MPCO1342)]",
        "[AFTN: (ARR-HP12V-MPMG-MPSA2143)]",
        "[AFTN: (ARR-ALAS72-MPMG-MPSA2058)]",
        "[AFTN: (ARR-ALAS71-MPMG-MPSA2056)]",
        "[AFTN: (ARR-ALAS73-MPMG-MPSA2054)]",
        "[AFTN: (ARR-HP123AA-MPMG1930-MPBO2028)]",
        "[AFTN: (ARR-HP124AA-MPMG1930-MPBO2032)]",
        "[AFTN: (ARR-HP2407R-ZZZZ-AMOL2037 CALOVE BORA)]"
    ],
    fpl: [
        "[AFTN: (FPL-HP4DMB-VG)]",
        "[AFTN: (FPL-CMP17-IS]",
        "[AFTN: (FPL-CMP13-IS]",
        "[AFTN: (FPL-N610SG-VG]",
        "[AFTN: (FPL-N844TH-VG]",
        "[AFTN: (FPL-HP1554F-VG]",
        "[AFTN: (FPL-PST970-IS]",
        "[AFTN: (FPL-PST982-IS]",
        "[AFTN: (FPL-CMP032-IS]",
        "[AFTN: (FPL-PST6601-IS]",
        "[AFTN: (FPL-IBE225-IS]",
        "[AFTN: (FPL-PST682-IS]",
        "[AFTN: (FPL-PST670-IS]",
        "[AFTN: (FPL-AMX032-IS]",
        "[AFTN: (FPL-N161PR-VG]",
        "[AFTN: (FPL-HP124AA-VG]",
        "[AFTN: (FPL-GTI793-IS]",
        "[AFTN: (FPL-HP126AA-VG]",
        "[AFTN: (FPL-LAN542-IS]",
        "[AFTN: (FPL-HP1995-VG]"
    ],
    chg: [
        "[AFTN: (CHG-PST686-MPMG1600-MPBO-DOF/251229)]",
        "[AFTN: (CHG-PST980-MPMG1930-MPBO-DOF/251229)]",
        "[AFTN: (CHG-PST6610-MPTO1300-MPSE-DOF/251229)]",
        "[AFTN: (CHG-BAT56-MPPA2015-MPPA-DOF/251228-16/MPPA0604)]",
        "[AFTN: (CHG-FAC5075-SKSP1330-SKPV-STS/HOSP PBN/B2C2D2025)]",
        "[AFTN: (CHG-BAT86-MPPA1800-MPPA-DOF/251224)]",
        "[AFTN: (CHG-PST985-MPBO2030-MPMG-DOF/251223)]",
        "[AFTN: (CHG-PST961-MPBO1915-MPMG-DOF/251223)]",
        "[AFTN: (CHG-PST984-MPMG1900-MPMG-DOF/251223)]",
        "[AFTN: (CHG-PST980-MPMG1745-MPBO-DOF/251223)]",
        "[AFTN: (CHG-AN140-MPPA1700-MPPU-DOF/251223)]",
        "[AFTN: (CHG-AN144-MPPA1945-MPPA-DOF/251219)]",
        "[AFTN: (CHG-AN140-ZZZZ1635-MPCH-DOF/251219)]",
        "[AFTN: (CHG-AN405-MPPA2230-MPPU-DOF/251218)]",
        "[AFTN: (CHG-AN402-MPPA1415-MPPU-DOF/251217)]",
        "[AFTN: (CHG-N469SY-MRLM1900-MPBO-DOF/251216)]",
        "[AFTN: (CHG-N469SY-MRLM1900-MPBO-DOF/251216)]",
        "[AFTN: (CHG-FAC5075-SKRG1530-MPPA-STS/STATE PBN/B2C2D2025)]",
        "[AFTN: (CHG-HK4846-SKBG1205-SKSP-STS/HOSP DOF/251215)]",
        "[AFTN: (CHG-AN140-MPPA1345-ZZZZ-DOF/251214)]"
    ],
    cnl: [
        "[AFTN: (CNL-N161PR-MPMG0215-MPMG-DOF/260112)]",
        "[AFTN: (CNL-N844TH-MPMG0200-MPMG-DOF/260111)]",
        "[AFTN: (CNL-HP2464K-MPPA2130-MPMG-DOF/260111)]",
        "[AFTN: (CNL-ALAS72-MPMG1945-MPCE-DOF/260111)]",
        "[AFTN: (CNL-N300GB-MPMG2030-KSUA-DOF/260111)]",
        "[AFTN: (CNL-N141JM-MPMG2000-MRPV-DOF/260111)]",
        "[AFTN: (CNL-HP125AA-MPMG1900-MPPA-DOF/260111)]",
        "[AFTN: (CNL-HP27SKT-MPMG1800-MPBO-DOF/260111)]",
        "[AFTN: (CNL-HP27SKT-MPMG1800-MPCE-DOF/260111)]",
        "[AFTN: (CNL-ALAS75-MPMG1415-MPEJ-DOF/260111)]",
        "[AFTN: (CNL-ALAS75-MPMG1530-MPSM-DOF/260111)]",
        "[AFTN: (CNL-PST9909-MPMG2030-MPSJ-DOF/260111)]",
        "[AFTN: (CNL-PST9907-MPMG1900-MPSA-DOF/260111)]",
        "[AFTN: (CNL-HP1971A-MPMG1945-MPSA-DOF/260110)]",
        "[AFTN: (CNL-ALAS75-MPMG1730-MPEJ-DOF/260110)]",
        "[AFTN: (CNL-ALAS75-MPMG1715-MPSM-DOF/260110)]",
        "[AFTN: (CNL-HP123-MPTO1530-MPMG-DOF/260110)]",
        "[AFTN: (CNL-CMP123-MPMG1200-SKBO-DOF/260110)]",
        "[AFTN: (CNL-HP1793P-MPBO2120-MPMG-DOF/260109)]"
    ],
    dep: [
        "[AFTN: (DEP-PST983-MPBO2249-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP123AA-MPBO2215-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP1818-MPSA2155-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP124AA-MPBO2048-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP1836A-MPBO2043-MPMG-DOF/260111)]",
        "[AFTN: (DEP-PST981-MPBO2012-MPMG-DOF/260111)]",
        "[AFTN: (DEP-LRS1063-MPBO2006-MROC-DOF/260111)]",
        "[AFTN: (DEP-N535MA-MPMG1941-KMCO-DOF/260111)]",
        "[AFTN: (DEP-HP27SKT-MPBO1934-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP12V-MPSA1821-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP3DMB-MPDA1758-MPMG-DOF/260111)]",
        "[AFTN: (DEP-AFR478-LFPG1745-MPTO-DOF/260111)]",
        "[AFTN: (DEP-HP124AA-MPBO1727-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP123AA-MPBO1721-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP188LM-MPMG1706-MRPV-DOF/260111)]",
        "[AFTN: (DEP-HP3DMB-MPBO1647-MPDA-DOF/260111)]",
        "[AFTN: (DEP-PST683-MPBO1609-MPMG-DOF/260111)]",
        "[AFTN: (DEP-HP4DMB-MPMG1534-MRPV-DOF/260111)]",
        "[AFTN: (DEP-N853TH-MPMG1509-KFLL-DOF/260111)]",
        "[AFTN: (DEP-AEA055-LEMD1444-MPTO-DOF/260111)]",
        "[AFTN: (DEP-HP2464K-MPCO1405-MPMG-DOF/260111)]",
        "[AFTN: (DEP-N799RM-MPDA1359-MPBO-DOF/260111)]",
        "[AFTN: (DEP-HP123AA-MPBO1337-MPMG-DOF/260111)]",
        "[AFTN: (DEP-PST681-MPBO1319-MPMG-DOF/260111)]",
        "[AFTN: (DEP-PST6600-MPMG1206-MNMG-DOF/260111)]"
    ],
    dla: [
        "[AFTN: (DLA-HP1951K-MPMG1300-MPCL-DOF/260111)]",
        "[AFTN: (DLA-AN113-MPPA1930-MPPA-DOF/260106)]",
        "[AFTN: (DLA-HP7007-MPDA1830-MPMG-DOF/260106)]",
        "[AFTN: (DLA-PST681-MPB01615-MPMG-DOF/260106)]",
        "[AFTN: (DLA-HP4DMB-MPB01515-MPTO-DOF/260106)]",
        "[AFTN: (DLA-HK5952-SKSP2200-SKPV-STS/HOSP PBN/B2C2D2O2S1 ]",
        "[AFTN: (DLA-HK5952-SKSP2000-SKPV-STS/HOSP PBN/B2C2D2O2S1 ]",
        "[AFTN: (DLA-HP1875S-MPTO2000-MPBO-DOF/260102)]",
        "[AFTN: (DLA-HP4DMB-MPTO1300-MPBO-DOF/260101)]",
        "[AFTN: (DLA-HP125AA-MPBO1730-MPMG-DOF/260101)]",
        "[AFTN: (DLA-HP777-MPMG1745-MPSM-DOF/251231)]",
        "[AFTN: (DLA-HP79-MPMG1545-MPMG-DOF/251231)]",
        "[AFTN: (DLA-PST683-MPBO1700-MPMG-DOF/251230)]",
        "[AFTN: (DLA-AN261-MPDA1450-MPPA-DOF/251230)]",
        "[AFTN: (DLA-FAC5075-SKSP1400-SKPV-PBN/B2C2D2O2S1 DOF/2512]",
        "[AFTN: (DLA-TIBJJ-MPPA2330-MRPV-DOF/251229)]",
        "[AFTN: (DLA-AN041-MPPA1820-MPPA-DOF/251229)]",
        "[AFTN: (DLA-HP2464K-MPTO2230-MPPD-DOF/251228)]",
        "[AFTN: (DLA-N71VZ-MPSM1830-MGGT-DOF/251227)]",
        "[AFTN: (DLA-HP4500-MPMG1600-MPRA-DOF/251226)]",
        "[AFTN: (DLA-HK5212G-SKRG1435-MPMG-PBN/B2C2D2 DOF/251226 ]",
        "[AFTN: (DLA-N997BF-MRPV1430-MPMG-DOF/251225)]"
    ]
};

// DOM elements
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryContainers = document.querySelectorAll('.category-container');
const messageDisplay = document.getElementById('message-display');
const messageContent = document.getElementById('message-content');
const closeMessageBtn = document.getElementById('close-message');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Populate all category grids
    for (const category in messages) {
        populateCategoryGrid(category);
    }

    // Set first category as active by default
    if (categoryBtns.length > 0) {
        showCategory(categoryBtns[0].dataset.category);
        categoryBtns[0].classList.add('active');
    }
});

// Function to populate a category grid with items
function populateCategoryGrid(category) {
    const container = document.getElementById(`${category}-items`);
    if (!container) return;

    container.innerHTML = '';
    const categoryMessages = messages[category];

    categoryMessages.forEach((message, index) => {
        const itemNumber = index + 1;
        // Create preview text (first 30 characters)
        const preview = message.length > 30 ? message.substring(0, 30) + "..." : message;

        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.dataset.category = category;
        itemCard.dataset.index = index;
        itemCard.innerHTML = `
            <div class="item-number">${itemNumber}</div>
            <div class="item-preview">${preview}</div>
        `;

        itemCard.addEventListener('click', function(event) {
            event.stopPropagation();
            showMessage(category, index);
            // Remove active class from all items
            document.querySelectorAll('.item-card.active').forEach(card => {
                card.classList.remove('active');
            });
            // Add active class to clicked item
            this.classList.add('active');
        });

        container.appendChild(itemCard);
    });
}

// Function to show a specific category
function showCategory(category) {
    // Hide all category containers
    categoryContainers.forEach(container => {
        container.classList.remove('active');
    });

    // Show selected category container
    const selectedContainer = document.getElementById(`${category}-container`);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
    }

    // Update active button
    categoryBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });

    // Hide message display
    messageDisplay.classList.remove('active');
}

// Function to show a message
function showMessage(category, index) {
    const categoryMessages = messages[category];
    if (categoryMessages && categoryMessages[index]) {
        messageContent.textContent = categoryMessages[index];
        messageDisplay.classList.add('active');
    }
}

// Event listeners for category buttons
categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const category = this.dataset.category;
        showCategory(category);
    });
});

// Event listener for close message button
closeMessageBtn.addEventListener('click', function() {
    messageDisplay.classList.remove('active');
    // Remove active class from all items
    document.querySelectorAll('.item-card.active').forEach(card => {
        card.classList.remove('active');
    });
});

// Close message when clicking outside (optional)
document.addEventListener('click', function(event) {
    if (messageDisplay.classList.contains('active') && 
        !messageDisplay.contains(event.target) && 
        !event.target.classList.contains('item-card') &&
        !event.target.closest('.item-card')) {
        messageDisplay.classList.remove('active');
        document.querySelectorAll('.item-card.active').forEach(card => {
            card.classList.remove('active');
        });
    }
});
