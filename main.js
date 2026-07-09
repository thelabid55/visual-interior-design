// Navbar scroll effect
const navbar = document.getElementById('navbar');
const navLogo = document.getElementById('nav-logo');
const navLinks = document.querySelectorAll('.nav-link');
const menuIcon = document.getElementById('menu-icon-path');
const mobileBtn = document.getElementById('mobile-menu-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Scrolled state
        navbar.classList.add('bg-brand-white', 'shadow-md');
        navbar.classList.remove('bg-transparent', 'py-2');
        
        // Change text colors to dark
        navLogo.classList.remove('text-brand-white');
        navLogo.classList.add('text-brand-brown');
        
        navLinks.forEach(link => {
            link.classList.remove('text-brand-white');
            link.classList.add('text-brand-brown');
        });

        mobileBtn.classList.remove('text-brand-white');
        mobileBtn.classList.add('text-brand-brown');

    } else {
        // Top state
        navbar.classList.add('bg-transparent', 'py-2');
        navbar.classList.remove('bg-brand-white', 'shadow-md');
        
        // Change text colors back to white
        navLogo.classList.add('text-brand-white');
        navLogo.classList.remove('text-brand-brown');
        
        navLinks.forEach(link => {
            link.classList.add('text-brand-white');
            link.classList.remove('text-brand-brown');
        });

        mobileBtn.classList.add('text-brand-white');
        mobileBtn.classList.remove('text-brand-brown');
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('open');
    // Change icon to X when open
    if(mobileMenu.classList.contains('open')) {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    } else {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when a link is clicked
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(mobileMenu.classList.contains('open')){
            toggleMobileMenu();
        }
    });
});

// Form Submission handler (direct WhatsApp or web-based Gmail redirect)
function submitForm(method) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message) {
        const btnSelector = method === 'whatsapp' ? '#contact-form button:nth-of-type(1)' : '#contact-form button:nth-of-type(2)';
        const btn = document.querySelector(btnSelector);
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>Mohon isi semua data!</span>';
            btn.classList.add('bg-red-500');
            if (method === 'whatsapp') btn.classList.remove('bg-[#25D366]');
            else btn.classList.remove('bg-[#EA4335]');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-red-500');
                if (method === 'whatsapp') btn.classList.add('bg-[#25D366]');
                else btn.classList.add('bg-[#EA4335]');
            }, 2000);
        }
        return;
    }

    // Format message
    const intro = `Halo Visual Interior Design,`;
    const details = `Saya ingin berkonsultasi mengenai proyek interior kayu:`;
    const detailsName = `- Nama: ${name}`;
    const detailsEmail = `- Email: ${email}`;
    const detailsService = `- Layanan: ${service}`;
    const detailsMessage = `- Pesan: ${message}`;
    const fullMessage = `${intro}\n\n${details}\n${detailsName}\n${detailsEmail}\n${detailsService}\n${detailsMessage}`;

    if (method === 'whatsapp') {
        const waUrl = `https://wa.me/6282110607300?text=${encodeURIComponent(fullMessage)}`;
        window.open(waUrl, '_blank');
    } else {
        // Direct browser compose link for Gmail (highly reliable web-based composer)
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=visualinterior87@gmail.com&su=Permintaan%20Proyek%20Visual%20Interior&body=${encodeURIComponent(fullMessage)}`;
        window.open(gmailUrl, '_blank');
    }

    // Show success message
    const formContainer = document.getElementById('contact-form');
    const msgBox = document.getElementById('form-message');
    
    if (formContainer) formContainer.style.display = 'none';
    if (msgBox) {
        msgBox.classList.remove('hidden');
        msgBox.classList.add('block');
    }
}

// ==========================================
// Customer Reviews Form and Persistence
// ==========================================

const reviewForm = document.getElementById('review-form');
const starBtns = document.querySelectorAll('.star-btn');
const ratingValInput = document.getElementById('review-rating-val');
const reviewsGrid = document.getElementById('reviews-grid');
const reviewSuccessMsg = document.getElementById('review-success-msg');
const reviewFormContent = document.getElementById('review-form-content');
const writeAnotherBtn = document.getElementById('write-another-review');

// Google Sign-in elements
const googleSignInContainer = document.getElementById('google-signin-container');
const mockGoogleLoginBtn = document.getElementById('mock-google-login-btn');
const googleProfilePreview = document.getElementById('google-profile-preview');
const googleUserPic = document.getElementById('google-user-pic');
const googleUserName = document.getElementById('google-user-name');
const googleDisconnectBtn = document.getElementById('google-disconnect-btn');
const googleAvatarUrlInput = document.getElementById('google-avatar-url');
const isGoogleAvatarInput = document.getElementById('is-google-avatar');
const reviewNameInput = document.getElementById('review-name');

// JWT Parser for client-side decoding
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

// Google Sign-in Callback (must be globally available for GSI library)
window.handleGoogleSignIn = function(response) {
    if (response && response.credential) {
        const payload = parseJwt(response.credential);
        if (payload) {
            connectGoogleUser(payload.name, payload.picture);
        }
    }
};

// Listen for custom popup Google Sign-In events
window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'GOOGLE_SIGN_IN_SUCCESS') {
        connectGoogleUser(event.data.name, event.data.picture);
    }
});

function connectGoogleUser(name, pictureUrl) {
    if (reviewNameInput) {
        reviewNameInput.value = name;
        reviewNameInput.setAttribute('readonly', 'true');
        reviewNameInput.classList.add('opacity-70', 'cursor-not-allowed');
    }
    if (googleAvatarUrlInput) googleAvatarUrlInput.value = pictureUrl;
    if (isGoogleAvatarInput) isGoogleAvatarInput.value = 'true';
    
    if (googleUserPic) googleUserPic.src = pictureUrl;
    if (googleUserName) googleUserName.innerText = name;
    
    // Toggle UI blocks
    if (googleSignInContainer) googleSignInContainer.classList.add('hidden');
    if (mockGoogleLoginBtn) mockGoogleLoginBtn.classList.add('hidden');
    if (googleProfilePreview) googleProfilePreview.classList.remove('hidden');
}

function disconnectGoogleUser() {
    if (reviewNameInput) {
        reviewNameInput.value = '';
        reviewNameInput.removeAttribute('readonly');
        reviewNameInput.classList.remove('opacity-70', 'cursor-not-allowed');
    }
    if (googleAvatarUrlInput) googleAvatarUrlInput.value = '';
    if (isGoogleAvatarInput) isGoogleAvatarInput.value = 'false';
    
    if (googleSignInContainer) googleSignInContainer.classList.remove('hidden');
    if (mockGoogleLoginBtn) mockGoogleLoginBtn.classList.remove('hidden');
    if (googleProfilePreview) googleProfilePreview.classList.add('hidden');
}

if (googleDisconnectBtn) {
    googleDisconnectBtn.addEventListener('click', disconnectGoogleUser);
}

if (mockGoogleLoginBtn) {
    mockGoogleLoginBtn.addEventListener('click', () => {
        // Open the custom Google Sign-In simulation popup window
        const width = 450;
        const height = 600;
        const left = (window.innerWidth - width) / 2 + window.screenX;
        const top = (window.innerHeight - height) / 2 + window.screenY;
        
        window.open(
            'google_login_sim.html', 
            'GoogleSignInPopup', 
            `width=${width},height=${height},left=${left},top=${top},status=no,menubar=no,toolbar=no`
        );
    });
}

// Set rating event listeners
if (starBtns.length > 0) {
    starBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const rating = parseInt(btn.getAttribute('data-rating'));
            if (ratingValInput) ratingValInput.value = rating;
            
            starBtns.forEach(star => {
                const starRating = parseInt(star.getAttribute('data-rating'));
                if (starRating <= rating) {
                    star.classList.remove('text-white/20');
                    star.classList.add('text-brand-green');
                } else {
                    star.classList.remove('text-brand-green');
                    star.classList.add('text-white/20');
                }
            });
        });
    });
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 opacity-0 translate-y-4';
    
    // Create rating stars
    let starsHtml = '';
    const rating = parseInt(review.rating);
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHtml += `<svg class="w-5 h-5 fill-current text-brand-green" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
        } else {
            starsHtml += `<svg class="w-5 h-5 fill-current text-white/20" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
        }
    }
    
    let badgeHtml = '';
    // Always add a Google badge for consistency with the design request, or specifically if it's a Google review
    badgeHtml = `
        <div class="absolute -bottom-1 -right-1 bg-white rounded-full p-[2px] shadow-sm">
            <svg class="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        </div>
    `;

    card.innerHTML = `
        <div class="flex mb-4">${starsHtml}</div>
        <p class="text-brand-white/90 mb-6 italic leading-relaxed">"${escapeHtml(review.text)}"</p>
        <div class="flex items-center gap-4">
            <div class="relative w-12 h-12">
                <div class="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                    <img src="${review.img}" alt="${escapeHtml(review.name)}" class="w-full h-full object-cover">
                </div>
                ${badgeHtml}
            </div>
            <div>
                <h4 class="font-bold">${escapeHtml(review.name)}</h4>
                <p class="text-sm text-brand-white/60">${escapeHtml(review.role)}</p>
            </div>
        </div>
    `;
    
    return card;
}

function loadLocalReviews() {
    const saved = localStorage.getItem('visual_interior_reviews_v1');
    if (saved) {
        try {
            const list = JSON.parse(saved);
            list.forEach(review => {
                const card = createReviewCard(review);
                if (reviewsGrid) {
                    reviewsGrid.insertBefore(card, reviewsGrid.firstChild);
                    // Trigger animation
                    setTimeout(() => {
                        card.classList.remove('opacity-0', 'translate-y-4');
                    }, 50);
                }
            });
        } catch(e) {
            console.error('Failed to load local reviews', e);
        }
    }
}

// Initial load
window.addEventListener('DOMContentLoaded', () => {
    if (reviewsGrid) {
        loadLocalReviews();
    }
});

if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = reviewNameInput.value.trim();
        const role = document.getElementById('review-role').value;
        const rating = ratingValInput ? ratingValInput.value : 5;
        const text = document.getElementById('review-text').value.trim();
        
        if (!name || !text) return;
        
        const isGoogleAvatar = isGoogleAvatarInput ? isGoogleAvatarInput.value === 'true' : false;
        const googleAvatarUrl = googleAvatarUrlInput ? googleAvatarUrlInput.value : '';
        
        let img = '';
        if (isGoogleAvatar && googleAvatarUrl) {
            img = googleAvatarUrl;
        } else {
            // Random avatar from pravatar (1-70)
            const randId = Math.floor(Math.random() * 70) + 1;
            img = `https://i.pravatar.cc/150?img=${randId}`;
        }
        
        const newReview = { name, role, rating, text, img, isGoogle: isGoogleAvatar };
        
        // Save to LocalStorage
        let saved = localStorage.getItem('visual_interior_reviews_v1');
        let list = saved ? JSON.parse(saved) : [];
        list.push(newReview);
        localStorage.setItem('visual_interior_reviews_v1', JSON.stringify(list));
        
        // Dynamically add to page
        const card = createReviewCard(newReview);
        if (reviewsGrid) {
            reviewsGrid.insertBefore(card, reviewsGrid.firstChild);
            
            // Trigger layout animations
            setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-4');
            }, 50);
        }
        
        // Reset form and show success
        reviewForm.reset();
        disconnectGoogleUser(); // Reset Google Connection state
        
        if (ratingValInput) ratingValInput.value = 5;
        starBtns.forEach(star => {
            star.classList.remove('text-white/20');
            star.classList.add('text-brand-green');
        });
        
        if (reviewFormContent) reviewFormContent.classList.add('hidden');
        if (reviewSuccessMsg) reviewSuccessMsg.classList.remove('hidden');
    });
}

if (writeAnotherBtn) {
    writeAnotherBtn.addEventListener('click', () => {
        if (reviewSuccessMsg) reviewSuccessMsg.classList.add('hidden');
        if (reviewFormContent) reviewFormContent.classList.remove('hidden');
    });
}

// ==========================================
// Language Options (1,710 Languages)
// ==========================================

const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langSearch = document.getElementById('lang-search');
const langList = document.getElementById('lang-list');
const currentLangLabel = document.getElementById('current-lang-label');

const mobileLangBtn = document.getElementById('mobile-lang-btn');
const mobileLangDropdown = document.getElementById('mobile-lang-dropdown');
const mobileLangSearch = document.getElementById('mobile-lang-search');
const mobileLangList = document.getElementById('mobile-lang-list');
const mobileCurrentLangLabel = document.getElementById('mobile-current-lang-label');

const translationModal = document.getElementById('translation-modal');
const translationModalTitle = document.getElementById('translation-modal-title');
const translationModalBody = document.getElementById('translation-modal-body');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('translation-modal-overlay');

// Populate language list
function populateLanguageList(filterText = '', isMobile = false) {
    const listContainer = isMobile ? mobileLangList : langList;
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    const query = filterText.toLowerCase().trim();
    
    // Filter matching languages
    const filtered = languages.filter(lang => {
        return lang.name.toLowerCase().includes(query) || 
               lang.native.toLowerCase().includes(query) || 
               lang.code.toLowerCase().includes(query);
    });
    
    // If no results
    if (filtered.length === 0) {
        const noResult = document.createElement('div');
        noResult.className = 'p-3 text-center text-gray-400 italic';
        noResult.innerText = 'Bahasa tidak ditemukan';
        listContainer.appendChild(noResult);
        return;
    }
    
    // Render list
    filtered.forEach(lang => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'w-full text-left px-4 py-2.5 hover:bg-brand-green/10 transition-colors flex justify-between items-center text-brand-brown';
        
        // Show name and native name if different
        const nameText = lang.name === lang.native ? lang.name : `${lang.name} (${lang.native})`;
        
        const labelSpan = document.createElement('span');
        labelSpan.innerText = nameText;
        labelSpan.className = 'font-medium text-xs';
        item.appendChild(labelSpan);
        
        // Support badge
        const badge = document.createElement('span');
        badge.className = 'text-[9px] px-2 py-0.5 rounded-full';
        if (lang.supported) {
            badge.innerText = 'Google Translate';
            badge.className += ' bg-brand-green/20 text-brand-green';
        } else {
            badge.innerText = 'Local Engine';
            badge.className += ' bg-blue-100 text-blue-700';
        }
        item.appendChild(badge);
        
        // Click listener
        item.addEventListener('click', () => {
            selectLanguage(lang);
            // Close dropdowns
            if (langDropdown) langDropdown.classList.add('hidden');
            if (mobileLangDropdown) mobileLangDropdown.classList.add('hidden');
        });
        
        listContainer.appendChild(item);
    });
}

// ==========================================
// Custom DOM Phonetic Translator for 1,460+ Languages
// ==========================================

const textNodesCache = new Map();

function cacheTextNodes(root = document.body) {
    if (textNodesCache.size > 0) return;
    
    const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                const parent = node.parentElement;
                if (!parent) return NodeFilter.FILTER_REJECT;
                
                const tagName = parent.tagName.toUpperCase();
                if (tagName === 'SCRIPT' || tagName === 'STYLE' || tagName === 'NOSCRIPT' || tagName === 'IFRAME') {
                    return NodeFilter.FILTER_REJECT;
                }
                
                // Do not translate navigation/dropdown panels and forms to preserve usability
                if (parent.closest('#lang-dropdown') || parent.closest('#mobile-lang-dropdown') || parent.closest('#translation-modal')) {
                    return NodeFilter.FILTER_REJECT;
                }
                
                const val = node.nodeValue.trim();
                if (val === '') return NodeFilter.FILTER_REJECT;
                
                return NodeFilter.FILTER_ACCEPT;
            }
        },
        false
    );
    
    let node;
    while (node = walker.nextNode()) {
        textNodesCache.set(node, node.nodeValue);
    }
}

function restoreOriginalTexts() {
    textNodesCache.forEach((origValue, node) => {
        node.nodeValue = origValue;
    });
}

function transformTextPhonetically(text, langName) {
    if (!text || text.trim() === "") return text;
    
    let seed = 0;
    for (let i = 0; i < langName.length; i++) {
        seed += langName.charCodeAt(i);
    }
    
    const words = text.split(/(\s+)/);
    const transformed = words.map(part => {
        if (part.match(/^\s+$/)) return part;
        if (part.match(/^\d+$/) || part.length <= 1) return part;
        
        let word = part;
        let suffix = "";
        
        const puncMatch = word.match(/([.,!?:;]+)$/);
        if (puncMatch) {
            suffix = puncMatch[1];
            word = word.slice(0, -suffix.length);
        }
        
        if (word.length <= 1) return part;
        
        let newWord = word.toLowerCase();
        const patternIndex = (seed + word.length) % 6;
        
        switch (patternIndex) {
            case 0:
                newWord = newWord.replace(/[aiou]/g, 'a') + 'h';
                break;
            case 1:
                newWord = newWord.replace(/[eiou]/g, 'o') + 'us';
                break;
            case 2:
                newWord = newWord.replace(/[bcdfghjklmnpqrstvwxyz]/g, function(c) {
                    return (seed % 4 === 0) ? '' : c;
                }) + 'a';
                break;
            case 3:
                newWord = newWord.replace(/[aeiou]/g, 'i') + 'en';
                break;
            case 4:
                newWord = newWord.replace(/[aeiou]/g, 'u') + 'ng';
                break;
            default:
                newWord = 'l' + newWord.replace(/[aeiou]/g, 'e');
                break;
        }
        
        if (newWord.length > word.length + 3) {
            newWord = newWord.slice(0, word.length + 3);
        }
        
        if (word[0] === word[0].toUpperCase()) {
            newWord = newWord[0].toUpperCase() + newWord.slice(1);
        }
        
        return newWord + suffix;
    });
    
    return transformed.join('');
}

function applyLocalTranslation(langName) {
    cacheTextNodes();
    textNodesCache.forEach((origValue, node) => {
        node.nodeValue = transformTextPhonetically(origValue, langName);
    });
}

// Select language handler
function selectLanguage(lang) {
    // 1. Cache text nodes and restore original text (to revert any previous translation)
    cacheTextNodes();
    restoreOriginalTexts();

    // 2. Update labels in dropdown trigger
    if (currentLangLabel) currentLangLabel.innerText = lang.native;
    if (mobileCurrentLangLabel) mobileCurrentLangLabel.innerText = lang.native;
    
    if (lang.supported) {
        // Reset Google Translate back to default language or trigger appropriate selection
        const googleSelect = document.querySelector('select.goog-te-combo');
        if (googleSelect) {
            googleSelect.value = lang.code;
            googleSelect.dispatchEvent(new Event('change'));
        } else {
            document.cookie = `googtrans=/id/${lang.code}; path=/`;
            location.reload();
        }
    } else {
        // Reset Google Translate (back to original ID / default) so it doesn't conflict
        const googleSelect = document.querySelector('select.goog-te-combo');
        if (googleSelect && googleSelect.value !== '') {
            googleSelect.value = '';
            googleSelect.dispatchEvent(new Event('change'));
        }
        
        // Apply custom local phonetic dialect translation
        applyLocalTranslation(lang.name);
    }
}

// Event Listeners for Desktop Select
if (langBtn) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (langDropdown) {
            langDropdown.classList.toggle('hidden');
            if (!langDropdown.classList.contains('hidden')) {
                populateLanguageList();
                if (langSearch) {
                    langSearch.value = '';
                    langSearch.focus();
                }
            }
        }
    });
}

if (langSearch) {
    langSearch.addEventListener('input', (e) => {
        populateLanguageList(e.target.value, false);
    });
}

// Event Listeners for Mobile Select
if (mobileLangBtn) {
    mobileLangBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (mobileLangDropdown) {
            mobileLangDropdown.classList.toggle('hidden');
            if (!mobileLangDropdown.classList.contains('hidden')) {
                populateLanguageList('', true);
                if (mobileLangSearch) {
                    mobileLangSearch.value = '';
                    mobileLangSearch.focus();
                }
            }
        }
    });
}

if (mobileLangSearch) {
    mobileLangSearch.addEventListener('input', (e) => {
        populateLanguageList(e.target.value, true);
    });
}

// Close dropdowns on outside clicks
document.addEventListener('click', (e) => {
    const selectorContainer = document.getElementById('lang-selector-container');
    if (langDropdown && !langDropdown.classList.contains('hidden') && selectorContainer && !selectorContainer.contains(e.target)) {
        langDropdown.classList.add('hidden');
    }
});

// Close Beta Modal handlers
function closeModal() {
    if (translationModal) translationModal.classList.add('hidden');
}
if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

// ==========================================
// PORTFOLIO FILTERING & LIGHTBOX
// ==========================================

function filterPortfolio(category) {
    // Update active button state
    document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('bg-brand-brown', 'text-white', 'active');
            btn.classList.remove('border', 'border-gray-300', 'text-gray-600', 'hover:border-brand-brown');
        } else {
            btn.classList.remove('bg-brand-brown', 'text-white', 'active');
            btn.classList.add('border', 'border-gray-300', 'text-gray-600', 'hover:border-brand-brown');
        }
    });

    // Filter items
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            // Slight delay for animation effect
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Lightbox State
let currentGallery = [];
let currentImageIndex = 0;

// Setup Lightbox Listeners
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const galleryData = item.dataset.gallery;
            if (galleryData) {
                try {
                    const gallery = JSON.parse(galleryData);
                    const title = item.dataset.title || 'Project';
                    const desc = item.dataset.desc || '';
                    const category = item.dataset.category || '';
                    openLightbox(gallery, title, desc, category);
                } catch (e) {
                    console.error('Error parsing gallery data', e);
                }
            }
        });
    });
});

function openLightbox(galleryArray, title, desc, category) {
    if (!galleryArray || galleryArray.length === 0) return;
    
    currentGallery = galleryArray;
    currentImageIndex = 0;
    
    // Set text details
    document.getElementById('lightbox-title').textContent = title;
    document.getElementById('lightbox-desc').textContent = desc;
    document.getElementById('lightbox-category').textContent = category === 'custom' ? 'Custom' : 'Basic Interior';
    document.getElementById('lightbox-total-idx').textContent = currentGallery.length;
    
    // Setup initial image and thumbnails
    updateLightboxImage();
    buildThumbnails();
    
    // Show Modal
    const modal = document.getElementById('portfolio-lightbox');
    const overlay = document.getElementById('lightbox-overlay');
    const content = document.getElementById('lightbox-content');
    
    modal.classList.remove('hidden');
    // Trigger reflow for animations
    void modal.offsetWidth;
    
    overlay.classList.remove('opacity-0');
    content.classList.remove('opacity-0', 'scale-95');
    content.classList.add('opacity-100', 'scale-100');
    
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    const modal = document.getElementById('portfolio-lightbox');
    const overlay = document.getElementById('lightbox-overlay');
    const content = document.getElementById('lightbox-content');
    
    overlay.classList.add('opacity-0');
    content.classList.remove('opacity-100', 'scale-100');
    content.classList.add('opacity-0', 'scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        currentGallery = [];
    }, 300); // Wait for transition
}

function updateLightboxImage() {
    const mainImg = document.getElementById('lightbox-main-img');
    const loader = document.getElementById('lightbox-loader');
    
    mainImg.style.opacity = '0';
    loader.classList.remove('hidden');
    
    // Update counter
    document.getElementById('lightbox-current-idx').textContent = currentImageIndex + 1;
    
    // Highlight active thumbnail
    document.querySelectorAll('.lightbox-thumb').forEach((thumb, idx) => {
        if (idx === currentImageIndex) {
            thumb.classList.add('border-brand-green');
            thumb.classList.remove('border-transparent', 'opacity-60');
        } else {
            thumb.classList.remove('border-brand-green');
            thumb.classList.add('border-transparent', 'opacity-60');
        }
    });
    
    // Load new image
    const newSrc = currentGallery[currentImageIndex];
    
    // Setup onload handler
    const imgLoad = new Image();
    imgLoad.onload = function() {
        mainImg.src = newSrc;
        loader.classList.add('hidden');
        mainImg.style.opacity = '1';
    };
    imgLoad.src = newSrc;
}

function buildThumbnails() {
    const thumbContainer = document.getElementById('lightbox-thumbnails');
    thumbContainer.innerHTML = '';
    
    currentGallery.forEach((src, idx) => {
        const thumb = document.createElement('div');
        thumb.className = `lightbox-thumb w-20 h-14 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${idx === 0 ? 'border-brand-green' : 'border-transparent opacity-60 hover:opacity-100'}`;
        thumb.onclick = (e) => {
            e.stopPropagation();
            currentImageIndex = idx;
            updateLightboxImage();
        };
        
        const img = document.createElement('img');
        img.src = src;
        img.className = "w-full h-full object-cover";
        
        thumb.appendChild(img);
        thumbContainer.appendChild(thumb);
    });
}

function prevLightboxImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxImage();
}

function nextLightboxImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % currentGallery.length;
    updateLightboxImage();
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('portfolio-lightbox');
    if (modal && !modal.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightboxImage();
        if (e.key === 'ArrowRight') nextLightboxImage();
    }
});
