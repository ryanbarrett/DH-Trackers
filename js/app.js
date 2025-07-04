


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const newCampaignBtn = document.getElementById('new-campaign-btn');

    let state = {
        campaigns: [],
        currentView: 'campaigns',
        selectedCampaignId: null,
        selectedSessionId: null,
    };

    // --- DATA MANAGEMENT ---
    const loadData = () => {
        const savedData = localStorage.getItem('daggerheartTracker');
        if (savedData) {
            const parsedData = JSON.parse(savedData);
            // Simple migration and data integrity check
            if (parsedData.campaigns) {
                parsedData.campaigns.forEach(campaign => {
                    if (campaign.sessions) {
                        campaign.sessions.forEach(session => {
                            if (session.endingFear !== undefined) {
                                session.fear = session.endingFear;
                                delete session.endingFear;
                            }
                            if (session.fear === undefined) session.fear = 0;
                            if (session.isLocked === undefined) session.isLocked = false;
                            if (session.name === undefined) {
                                session.name = `Session ${new Date(session.date).toLocaleDateString()}`;
                            }
                        });
                    }
                });
                state.campaigns = parsedData.campaigns;
            }
        }
    };

    const saveData = () => {
        localStorage.setItem('daggerheartTracker', JSON.stringify({ campaigns: state.campaigns }));
    };

    // --- NAVIGATION ---
    const navigate = (view, campaignId = null, sessionId = null) => {
        state.currentView = view;
        state.selectedCampaignId = campaignId;
        state.selectedSessionId = sessionId;
        render();
    };

    // --- RENDER FUNCTIONS ---
    const render = () => {
        app.innerHTML = '';
        switch (state.currentView) {
            case 'sessions':
                renderSessionListView();
                break;
            case 'sessionDetail':
                renderSessionDetailView();
                break;
            case 'settings':
                renderSettingsView();
                break;
            case 'campaigns':
            default:
                renderCampaignListView();
                break;
        }
    };

    const renderCampaignListView = () => {
        app.innerHTML = '<h2>Campaigns</h2>';
        if (state.campaigns.length === 0) {
            app.innerHTML += '<p>No campaigns found. Create a new one to get started!</p>';
            return;
        }
        const list = document.createElement('div');
        list.className = 'list-group';
        state.campaigns.forEach(campaign => {
            const item = document.createElement('div');
            item.className = 'list-group-item d-flex justify-content-between align-items-center';
            item.innerHTML = `
                <button type="button" class="btn btn-link text-start flex-grow-1 p-0 campaign-link" data-campaign-id="${campaign.id}">${campaign.name}</button>
                <button type="button" class="btn btn-sm btn-outline-secondary rename-campaign-btn" data-campaign-id="${campaign.id}">Rename</button>
            `;
            list.appendChild(item);
        });
        app.appendChild(list);

        // Add event listeners for campaign links and rename buttons
        app.addEventListener('click', (e) => {
            if (e.target.classList.contains('campaign-link')) {
                const campaignId = e.target.dataset.campaignId;
                navigate('sessions', campaignId);
            }
            if (e.target.classList.contains('rename-campaign-btn')) {
                const campaignId = e.target.dataset.campaignId;
                const campaign = state.campaigns.find(c => c.id === campaignId);
                if (campaign) {
                    const newName = prompt('Enter new campaign name:', campaign.name);
                    if (newName && newName !== campaign.name) {
                        campaign.name = newName;
                        saveData();
                        render();
                    }
                }
            }
        });
    };

    const renderSessionListView = () => {
        const campaign = state.campaigns.find(c => c.id === state.selectedCampaignId);
        if (!campaign) { return navigate('campaigns'); }

        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h2>${campaign.name} - Sessions</h2>
                <div>
                    <button class="btn btn-secondary" id="back-to-campaigns">Back</button>
                    <button class="btn btn-primary" id="new-session-btn">New Session</button>
                </div>
            </div>
        `;

        if (campaign.sessions.length === 0) {
            app.innerHTML += '<p>No sessions yet. Create one to begin!</p>';
        } else {
            const list = document.createElement('div');
            list.className = 'list-group';
            campaign.sessions.forEach(session => {
                const item = document.createElement('a');
                item.href = '#';
                item.className = `list-group-item list-group-item-action ${session.isLocked ? 'text-muted' : ''}`;
                item.innerHTML = `
                    <h5 class="mb-1"><i class="fas ${session.isLocked ? 'fa-lock' : 'fa-lock-open'} me-2"></i>${session.name}</h5>
                    <small>${new Date(session.date).toLocaleDateString()} • Encounters: ${session.encounters.length}</small>
                `;
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigate('sessionDetail', campaign.id, session.id);
                });
                list.appendChild(item);
            });
            app.appendChild(list);
        }

        document.getElementById('back-to-campaigns').addEventListener('click', () => navigate('campaigns'));
        document.getElementById('new-session-btn').addEventListener('click', () => {
            const sessionName = prompt('Enter session name:', `Session ${campaign.sessions.length + 1}`);
            if (sessionName === null) return;
            
            const newSession = {
                id: `s-${new Date().getTime()}`,
                name: sessionName || `Session ${campaign.sessions.length + 1}`,
                date: new Date().toISOString(),
                startingFear: 0,
                fear: 0,
                characterNotes: '',
                shortRests: 0,
                longRests: 0,
                isLocked: false,
                encounters: []
            };
            campaign.sessions.push(newSession);
            saveData();
            render();
        });
    };

    const renderSessionDetailView = () => {
        const campaign = state.campaigns.find(c => c.id === state.selectedCampaignId);
        if (!campaign) { return navigate('campaigns'); }
        const session = campaign.sessions.find(s => s.id === state.selectedSessionId);
        if (!session) { return navigate('sessions', campaign.id); }
        const disabled = session.isLocked ? 'disabled' : '';

        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h3>Session Details</h3>
                <div>
                    <button class="btn btn-warning me-2" id="toggle-lock-btn">${session.isLocked ? '<i class="fas fa-lock"></i> Unlock' : '<i class="fas fa-lock-open"></i> Lock'}</button>
                    <button class="btn btn-secondary" id="back-to-sessions">Back to Sessions</button>
                </div>
            </div>
            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="session-name" class="form-label">Session Name</label>
                            <input type="text" class="form-control" id="session-name" value="${session.name}" ${disabled}>
                        </div>
                        <div class="col-md-3">
                            <label for="session-date" class="form-label">Date</label>
                            <input type="date" class="form-control" id="session-date" value="${session.date.split('T')[0]}" ${disabled}>
                        </div>
                        <div class="col-md-3">
                            <label for="startingFear" class="form-label">Starting Fear</label>
                            <input type="number" class="form-control" id="startingFear" value="${session.startingFear}" ${disabled}>
                        </div>
                        <div class="col-md-3">
                            <label for="fear" class="form-label">Fear</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="decrement-fear" ${disabled}>-</button>
                                <input type="number" class="form-control" id="fear" value="${session.fear}" ${disabled}>
                                <button class="btn btn-outline-secondary" type="button" id="increment-fear" ${disabled}>+</button>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">Short Rests</label>
                            <div class="d-flex gap-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shortRest1" ${session.shortRests >= 1 ? 'checked' : ''} ${disabled}>
                                    <label class="form-check-label" for="shortRest1">1</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shortRest2" ${session.shortRests >= 2 ? 'checked' : ''} ${disabled}>
                                    <label class="form-check-label" for="shortRest2">2</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="shortRest3" ${session.shortRests >= 3 ? 'checked' : ''} ${disabled}>
                                    <label class="form-check-label" for="shortRest3">3</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <label for="longRests" class="form-label">Long Rests</label>
                            <div class="d-flex gap-2 align-items-center">
                                <input type="number" class="form-control" id="longRests" value="${session.longRests}" ${disabled} readonly>
                                <button class="btn btn-primary" type="button" id="long-rest-btn" ${disabled}>Long Rest</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <label for="characterNotes" class="form-label">Character Notes</label>
                        <textarea class="form-control" id="characterNotes" rows="5" ${disabled}>${session.characterNotes}</textarea>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4>Encounters</h4>
                <button class="btn btn-primary" id="new-encounter-btn" ${disabled}>New Encounter</button>
            </div>
            <div id="encounters-list"></div>
        `;

        renderEncounters(session);

        app.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', (e) => {
                const { id, value } = e.target;
                if (id === 'session-date') session.date = new Date(value).toISOString();
                else if (id === 'session-name') session.name = value;
                else if (id === 'characterNotes') session.characterNotes = value;
                else session[id] = isNaN(Number(value)) ? value : Number(value);
                saveData();
            });
        });

        document.getElementById('decrement-fear').addEventListener('click', () => {
            session.fear = Math.max(0, session.fear - 1);
            saveData();
            render();
        });

        document.getElementById('increment-fear').addEventListener('click', () => {
            session.fear += 1;
            saveData();
            render();
        });

        document.getElementById('long-rest-btn').addEventListener('click', () => {
            session.longRests += 1;
            session.shortRests = 0; // Clear short rests on long rest
            saveData();
            render();
        });

        // Short rest checkbox handlers
        ['shortRest1', 'shortRest2', 'shortRest3'].forEach((id, index) => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.addEventListener('change', () => {
                    const restNumber = index + 1;
                    if (checkbox.checked) {
                        // If checking a box, ensure all previous boxes are also checked
                        session.shortRests = Math.max(session.shortRests, restNumber);
                    } else {
                        // If unchecking a box, uncheck all subsequent boxes
                        session.shortRests = Math.min(session.shortRests, index);
                    }
                    saveData();
                    render();
                });
            }
        });

        document.getElementById('toggle-lock-btn').addEventListener('click', () => {
            session.isLocked = !session.isLocked;
            saveData();
            render();
        });

        document.getElementById('back-to-sessions').addEventListener('click', () => navigate('sessions', campaign.id));
        document.getElementById('new-encounter-btn').addEventListener('click', () => {
            const newEncounter = {
                id: `e-${new Date().getTime()}`,
                notes: '',
                adversaries: []
            };
            session.encounters.push(newEncounter);
            saveData();
            renderEncounters(session);
        });
    };

    const renderSettingsView = () => {
        app.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2>Settings</h2>
                <button class="btn btn-secondary" id="back-to-campaigns-btn">Back to Campaigns</button>
            </div>
            
            <div class="row">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Data Management</h5>
                        </div>
                        <div class="card-body">
                            <div class="row g-3">
                                <div class="col-md-4">
                                    <button class="btn btn-success w-100" id="import-btn">
                                        <i class="fas fa-upload me-2"></i>Import Data
                                    </button>
                                    <small class="text-muted">Import campaigns from a file</small>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-info w-100" id="export-btn">
                                        <i class="fas fa-download me-2"></i>Export Data
                                    </button>
                                    <small class="text-muted">Download your campaigns as a file</small>
                                </div>
                                <div class="col-md-4">
                                    <button class="btn btn-danger w-100" id="delete-storage-btn">
                                        <i class="fas fa-trash me-2"></i>Clear All Data
                                    </button>
                                    <small class="text-muted">Delete all campaigns permanently</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card mt-4">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Application Info</h5>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <p><strong>Version:</strong> 1.0.0</p>
                                    <p><strong>SRD Adversaries:</strong> ${typeof srdAdversaries !== 'undefined' ? srdAdversaries.length : 'Loading...'}</p>
                                </div>
                                <div class="col-md-6">
                                    <p><strong>Campaigns:</strong> ${state.campaigns ? state.campaigns.length : 0}</p>
                                    <p><strong>Total Sessions:</strong> ${state.campaigns ? state.campaigns.reduce((total, campaign) => total + (campaign.sessions ? campaign.sessions.length : 0), 0) : 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add event listener for back button
        document.getElementById('back-to-campaigns-btn').addEventListener('click', () => {
            navigate('campaigns');
        });
    };

    const renderEncounters = (session) => {
        const encountersListDiv = document.getElementById('encounters-list');
        const disabled = session.isLocked ? 'disabled' : '';
        encountersListDiv.innerHTML = '';
        if (session.encounters.length === 0) {
            encountersListDiv.innerHTML = '<p>No encounters for this session yet.</p>';
            return;
        }

        session.encounters.forEach(encounter => {
            const encounterCard = document.createElement('div');
            encounterCard.className = 'card mb-3';
            encounterCard.innerHTML = `
                <div class="card-header d-flex justify-content-between align-items-center">
                    Encounter
                    <div>
                        <button class="btn btn-success btn-sm me-2 add-adversary-btn" data-encounter-id="${encounter.id}" ${disabled}>Add Adversary</button>
                        <button class="btn btn-sm btn-outline-danger delete-encounter-btn" data-encounter-id="${encounter.id}" ${disabled}>Delete Encounter</button>
                    </div>
                </div>
                <div class="card-body">
                    <div id="adversaries-list-${encounter.id}" class="mb-3"></div>
                    <h5>General Encounter Notes</h5>
                    <textarea class="form-control encounter-notes" data-encounter-id="${encounter.id}" placeholder="General notes for the encounter..." ${disabled}>${encounter.notes}</textarea>
                </div>
            `;
            encountersListDiv.appendChild(encounterCard);
            renderAdversaries(encounter, session.isLocked);
        });

        encountersListDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-encounter-btn')) {
                const encounterId = e.target.dataset.encounterId;
                session.encounters = session.encounters.filter(enc => enc.id !== encounterId);
                saveData();
                renderEncounters(session);
            }
            if (e.target.classList.contains('add-adversary-btn')) {
                const encounterId = e.target.dataset.encounterId;
                renderAdversaryModal(session, encounterId);
            }
        });
        encountersListDiv.addEventListener('input', (e) => {
            if (e.target.classList.contains('encounter-notes')) {
                const encounterId = e.target.dataset.encounterId;
                const encounter = session.encounters.find(e => e.id === encounterId);
                encounter.notes = e.target.value;
                saveData();
            }
        });
    };

    const renderAdversaries = (encounter, isLocked) => {
        const adversariesListDiv = document.getElementById(`adversaries-list-${encounter.id}`);
        const disabled = isLocked ? 'disabled' : '';
        adversariesListDiv.innerHTML = '';
        if (encounter.adversaries.length === 0) {
            adversariesListDiv.innerHTML = '<small>No adversaries in this encounter.</small>';
            return;
        }

        encounter.adversaries.forEach(adversary => {
            const adversaryDiv = document.createElement('div');
            adversaryDiv.className = 'adversary-card mb-3 p-3 border rounded';
            adversaryDiv.innerHTML = `
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control form-control-lg mb-2 adversary-name-input" value="${adversary.name}" data-adversary-id="${adversary.id}" ${disabled}>
                        <img src="${adversary.imageUrl || ''}" class="adversary-image img-fluid rounded ${!adversary.imageUrl ? 'd-none' : ''}" alt="${adversary.name}">
                        <button class="btn btn-sm btn-secondary w-100 mt-2 set-image-btn" data-adversary-id="${adversary.id}" ${disabled}>Set Image</button>
                    </div>
                    <div class="col-md-8">
                        <div class="row g-2 mb-2">
                            <div class="col">
                                <label class="form-label-sm">Max HP</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.maxHP}" data-adversary-id="${adversary.id}" data-stat="maxHP" ${disabled}>
                            </div>
                            <div class="col">
                                <label class="form-label-sm">Max Stress</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.maxStress}" data-adversary-id="${adversary.id}" data-stat="maxStress" ${disabled}>
                            </div>
                            <div class="col">
                                <label class="form-label-sm">Major</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.majorThreshold || ''}" data-adversary-id="${adversary.id}" data-stat="majorThreshold" ${disabled}>
                            </div>
                            <div class="col">
                                <label class="form-label-sm">Severe</label>
                                <input type="number" class="form-control form-control-sm adversary-stat-input" value="${adversary.severeThreshold || ''}" data-adversary-id="${adversary.id}" data-stat="severeThreshold" ${disabled}>
                            </div>
                        </div>
                        <div class="mb-2 ${adversary.currentHP === adversary.maxHP ? 'maxed-out' : ''}">
                            <strong>HP:</strong> (${adversary.currentHP}/${adversary.maxHP})
                            <div class="hp-trackers">${generateCheckboxes('hp', adversary.id, adversary.maxHP, adversary.currentHP, disabled)}</div>
                        </div>
                        <div class="${adversary.currentStress === adversary.maxStress ? 'maxed-out' : ''}">
                            <strong>Stress:</strong> (${adversary.currentStress}/${adversary.maxStress})
                            <div class="stress-trackers">${generateCheckboxes('stress', adversary.id, adversary.maxStress, adversary.currentStress, disabled)}</div>
                        </div>
                        <details class="mt-2">
                            <summary>Details & Notes</summary>
                            <div class="adversary-notes p-2 bg-light rounded mt-1">
                                <div class="mb-2">
                                    <label class="form-label small">Stats Details</label>
                                    <textarea class="form-control form-control-sm adversary-note" data-adversary-id="${adversary.id}" data-note-type="stats" rows="3" ${disabled}>${adversary.stats || ''}</textarea>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small">Motives & Tactics</label>
                                    <textarea class="form-control form-control-sm adversary-note" data-adversary-id="${adversary.id}" data-note-type="motives" rows="2" ${disabled}>${adversary.notes.motives || ''}</textarea>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small">Attacks & Features</label>
                                    <textarea class="form-control form-control-sm adversary-note" data-adversary-id="${adversary.id}" data-note-type="features" rows="4" ${disabled}>${adversary.notes.features || ''}</textarea>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
                 <button class="btn btn-sm btn-secondary duplicate-adversary-btn" data-adversary-id="${adversary.id}" ${disabled}>Duplicate</button>
                 <button class="btn btn-sm btn-danger delete-adversary-btn" data-adversary-id="${adversary.id}" ${disabled}>Delete Adversary</button>
            `;
            adversariesListDiv.appendChild(adversaryDiv);
        });

        adversariesListDiv.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-adversary-btn')) {
                const adversaryId = e.target.dataset.adversaryId;
                const adversary = encounter.adversaries.find(m => m.id === adversaryId);
                const adversaryName = adversary ? adversary.name : 'this adversary';
                
                if (confirm(`Delete ${adversaryName}? For real?`)) {
                    encounter.adversaries = encounter.adversaries.filter(m => m.id !== adversaryId);
                    saveData();
                    renderAdversaries(encounter, isLocked);
                }
            }
            if (e.target.classList.contains('duplicate-adversary-btn')) {
                const adversaryId = e.target.dataset.adversaryId;
                const adversary = encounter.adversaries.find(m => m.id === adversaryId);
                if (adversary) {
                    const duplicatedAdversary = {
                        ...adversary,
                        id: `m-${Date.now()}`,
                        name: `${adversary.name} (Copy)`
                    };
                    encounter.adversaries.push(duplicatedAdversary);
                    saveData();
                    renderAdversaries(encounter, isLocked);
                }
            }
            if (e.target.classList.contains('set-image-btn')) {
                const adversaryId = e.target.dataset.adversaryId;
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = 'image/*';
                input.onchange = (event) => {
                    const file = event.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = (readerEvent) => {
                        const adversary = encounter.adversaries.find(m => m.id === adversaryId);
                        adversary.imageUrl = readerEvent.target.result;
                        saveData();
                        renderAdversaries(encounter, isLocked);
                    };
                    reader.readAsDataURL(file);
                };
                input.click();
            }
        });

        adversariesListDiv.addEventListener('input', (e) => {
            const { adversaryId } = e.target.dataset;
            const adversary = encounter.adversaries.find(m => m.id === adversaryId);
            if (!adversary) return;

            if (e.target.classList.contains('adversary-name-input')) {
                adversary.name = e.target.value;
            } else if (e.target.classList.contains('adversary-note')) {
                const { noteType } = e.target.dataset;
                if (noteType === 'stats') {
                    adversary.stats = e.target.value;
                } else {
                    if (!adversary.notes) adversary.notes = {};
                    adversary.notes[noteType] = e.target.value;
                }
            } else if (e.target.classList.contains('adversary-stat-input')) {
                const { stat } = e.target.dataset;
                const newValue = parseInt(e.target.value, 10) || 0;
                adversary[stat] = newValue;
                if (stat === 'maxHP') adversary.currentHP = Math.min(adversary.currentHP, newValue);
                if (stat === 'maxStress') adversary.currentStress = Math.min(adversary.currentStress, newValue);
                renderAdversaries(encounter, isLocked); // Re-render for stat changes
            }
            saveData();
        });

        adversariesListDiv.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox') {
                const parts = e.target.dataset.id.split('-');
                const type = parts[0];
                const adversaryId = parts.slice(1).join('-');

                // Fetch the latest session and encounter from the state
                const currentCampaign = state.campaigns.find(c => c.id === state.selectedCampaignId);
                const currentSession = currentCampaign ? currentCampaign.sessions.find(s => s.id === state.selectedSessionId) : null;
                const currentEncounter = currentSession ? currentSession.encounters.find(enc => enc.id === encounter.id) : null;

                if (!currentEncounter) {
                    console.error('Error: Current encounter not found in state.');
                    return;
                }

                const adversary = currentEncounter.adversaries.find(m => m.id === adversaryId);

                if (!adversary) {
                    console.error('Error: Adversary with ID', adversaryId, 'not found in current encounter.');
                    return;
                }

                const checkedCount = e.target.parentElement.querySelectorAll('input:checked').length;
                if (type === 'hp') {
                    adversary.currentHP = checkedCount;
                    // Find the hp-trackers div and its parent container
                    const hpTrackers = e.target.closest('.hp-trackers');
                    const hpContainer = hpTrackers.parentElement;
                    
                    // Find and update the text node (everything before the hp-trackers div)
                    const textNodes = [];
                    for (let node of hpContainer.childNodes) {
                        if (node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && node !== hpTrackers)) {
                            textNodes.push(node);
                        }
                    }
                    // Remove old text nodes and elements (except trackers)
                    textNodes.forEach(node => node.remove());
                    
                    // Add new text at the beginning
                    const newText = document.createElement('span');
                    newText.innerHTML = `<strong>HP:</strong> (${adversary.currentHP}/${adversary.maxHP})`;
                    hpContainer.insertBefore(newText, hpTrackers);
                    
                    // Update maxed-out class on the parent div
                    if (adversary.currentHP === adversary.maxHP) {
                        hpContainer.classList.add('maxed-out');
                    } else {
                        hpContainer.classList.remove('maxed-out');
                    }
                } else {
                    adversary.currentStress = checkedCount;
                    // Find the stress-trackers div and its parent container
                    const stressTrackers = e.target.closest('.stress-trackers');
                    const stressContainer = stressTrackers.parentElement;
                    
                    // Find and update the text node (everything before the stress-trackers div)
                    const textNodes = [];
                    for (let node of stressContainer.childNodes) {
                        if (node.nodeType === Node.TEXT_NODE || (node.nodeType === Node.ELEMENT_NODE && node !== stressTrackers)) {
                            textNodes.push(node);
                        }
                    }
                    // Remove old text nodes and elements (except trackers)
                    textNodes.forEach(node => node.remove());
                    
                    // Add new text at the beginning
                    const newText = document.createElement('span');
                    newText.innerHTML = `<strong>Stress:</strong> (${adversary.currentStress}/${adversary.maxStress})`;
                    stressContainer.insertBefore(newText, stressTrackers);
                    
                    // Update maxed-out class on the parent div
                    if (adversary.currentStress === adversary.maxStress) {
                        stressContainer.classList.add('maxed-out');
                    } else {
                        stressContainer.classList.remove('maxed-out');
                    }
                }
                saveData();
            }
        });
    };

    const generateCheckboxes = (type, adversaryId, max, current, disabled) => {
        let html = '';
        for (let i = 0; i < max; i++) {
            let isChecked = false;
            if (type === 'hp') {
                isChecked = (i < current);
            } else { // type === 'stress'
                isChecked = (i < current);
            }
            html += `<input type="checkbox" class="form-check-input" data-id="${type}-${adversaryId}" ${isChecked ? 'checked' : ''} ${disabled}>`;
        }
        return html;
    };

    const renderAdversaryModal = (session, encounterId) => {
        const existingModal = document.getElementById('adversary-modal');
        if (existingModal) existingModal.remove();

        const modalHtml = `
        <div class="modal fade" id="adversary-modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Adversary</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <ul class="nav nav-tabs" id="adversary-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="srd-tab" data-bs-toggle="tab" data-bs-target="#srd-panel" type="button">From SRD</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="custom-tab" data-bs-toggle="tab" data-bs-target="#custom-panel" type="button">Custom</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="adversary-tab-content">
                            <div class="tab-pane fade show active p-3" id="srd-panel">
                                <label for="srd-select" class="form-label">Select Adversary</label>
                                <select class="form-select" id="srd-select">
                                    ${srdAdversaries.map(a => `<option value="${a.name}">${a.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="tab-pane fade p-3" id="custom-panel">
                                <div class="mb-3">
                                    <label for="custom-name" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="custom-name" placeholder="e.g., Goblin Boss">
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <label for="custom-hp" class="form-label">Max HP</label>
                                        <input type="number" class="form-control" id="custom-hp" value="10">
                                    </div>
                                    <div class="col">
                                        <label for="custom-stress" class="form-label">Max Stress</label>
                                        <input type="number" class="form-control" id="custom-stress" value="5">
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <div class="col">
                                        <label for="custom-major" class="form-label">Major</label>
                                        <input type="number" class="form-control" id="custom-major" value="5">
                                    </div>
                                    <div class="col">
                                        <label for="custom-severe" class="form-label">Severe</label>
                                        <input type="number" class="form-control" id="custom-severe" value="10">
                                    </div>
                                </div>
                                <div class="mt-3">
                                    <label for="custom-image" class="form-label">Image</label>
                                    <input type="file" class="form-control" id="custom-image" accept="image/*">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="add-adversary-confirm">Add</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = new bootstrap.Modal(document.getElementById('adversary-modal'));
        modal.show();

        document.getElementById('add-adversary-confirm').addEventListener('click', () => {
            const encounter = session.encounters.find(e => e.id === encounterId);
            const activeTab = document.querySelector('#adversary-tab .active').id;
            let newAdversary;

            if (activeTab === 'srd-tab') {
                const selectedName = document.getElementById('srd-select').value;
                const template = srdAdversaries.find(a => a.name === selectedName);
                
                // Parse stats from the stats string
                const parseStats = (statsString) => {
                    const stats = { maxHP: 0, maxStress: 0, majorThreshold: 0, severeThreshold: 0 };
                    if (statsString) {
                        const hpMatch = statsString.match(/HP:\*?\*?\s*(\d+)/i);
                        const stressMatch = statsString.match(/Stress:\*?\*?\s*(\d+)/i);
                        const thresholdMatch = statsString.match(/Thresholds:\*?\*?\s*(\d+)\/(\d+)/i);
                        
                        if (hpMatch) stats.maxHP = parseInt(hpMatch[1], 10);
                        if (stressMatch) stats.maxStress = parseInt(stressMatch[1], 10);
                        if (thresholdMatch) {
                            stats.majorThreshold = parseInt(thresholdMatch[1], 10);
                            stats.severeThreshold = parseInt(thresholdMatch[2], 10);
                        }
                    }
                    return stats;
                };
                
                const parsedStats = parseStats(template.stats);
                newAdversary = {
                    id: `m-${new Date().getTime()}`,
                    name: template.name,
                    maxHP: parsedStats.maxHP,
                    currentHP: 0,
                    maxStress: parsedStats.maxStress,
                    currentStress: 0,
                    majorThreshold: parsedStats.majorThreshold,
                    severeThreshold: parsedStats.severeThreshold,
                    stats: template.stats || '',
                    notes: {
                        motives: template.notes.motives_and_tactics || '',
                        features: template.notes.features || ''
                    },
                    imageUrl: null
                };
                 encounter.adversaries.push(newAdversary);
                 saveData();
                 renderAdversaries(encounter, session.isLocked);
                 modal.hide();
            } else {
                const maxHP = parseInt(document.getElementById('custom-hp').value, 10) || 10;
                const maxStress = parseInt(document.getElementById('custom-stress').value, 10) || 5;
                newAdversary = {
                    id: `m-${new Date().getTime()}`,
                    name: document.getElementById('custom-name').value || 'Custom Adversary',
                    maxHP: maxHP,
                    currentHP: 0,
                    maxStress: maxStress,
                    currentStress: 0,
                    majorThreshold: parseInt(document.getElementById('custom-major').value, 10) || 5,
                    severeThreshold: parseInt(document.getElementById('custom-severe').value, 10) || 10,
                    stats: '',
                    notes: { motives: '', features: '' },
                    imageUrl: null
                };
                
                const imageFile = document.getElementById('custom-image').files[0];
                if (imageFile) {
                    const reader = new FileReader();
                    reader.onload = (readerEvent) => {
                        newAdversary.imageUrl = readerEvent.target.result;
                        encounter.adversaries.push(newAdversary);
                        saveData();
                        renderAdversaries(encounter, session.isLocked);
                        modal.hide();
                    };
                    reader.readAsDataURL(imageFile);
                } else {
                    encounter.adversaries.push(newAdversary);
                    saveData();
                    renderAdversaries(encounter, session.isLocked);
                    modal.hide();
                }
            }
        });
    };

    // --- GLOBAL EVENT LISTENERS ---
    newCampaignBtn.addEventListener('click', () => {
        const campaignName = prompt('Enter campaign name:');
        if (campaignName) {
            const newCampaign = {
                id: `c-${new Date().getTime()}`,
                name: campaignName,
                created: new Date().toISOString(),
                sessions: []
            };
            state.campaigns.push(newCampaign);
            saveData();
            render();
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.id === 'export-btn') {
            const dataStr = JSON.stringify(state.campaigns, null, 2);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            const exportFileDefaultName = 'daggerheart_tracker_data.json';
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
        }
        
        if (e.target.id === 'import-btn') {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = e => {
                const file = e.target.files[0];
                if (!file) return;
                
                const reader = new FileReader();
                reader.onload = readerEvent => {
                    try {
                        const content = readerEvent.target.result;
                        const importedCampaigns = JSON.parse(content);
                        if (Array.isArray(importedCampaigns) && confirm('This will replace all your current data. Are you sure?')) {
                            state.campaigns = importedCampaigns;
                            saveData();
                            navigate('campaigns');
                        } else {
                            alert('Invalid file format.');
                        }
                    } catch (error) {
                        alert('Error reading or parsing file.');
                        console.error(error);
                    }
                }
                reader.readAsText(file);
            }
            input.click();
        }
        
        if (e.target.id === 'delete-storage-btn') {
            if (confirm('This will export your data as a backup and then clear all local storage. Are you sure you want to continue?')) {
                // First export the data as backup
                const dataStr = JSON.stringify(state.campaigns, null, 2);
                const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
                const exportFileDefaultName = `daggerheart_backup_${new Date().toISOString().split('T')[0]}.json`;
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', dataUri);
                linkElement.setAttribute('download', exportFileDefaultName);
                linkElement.click();
                
                // Clear local storage after a short delay to ensure download starts
                setTimeout(() => {
                    localStorage.removeItem('daggerheartTracker');
                    state.campaigns = [];
                    render();
                    alert('Local storage cleared successfully. Your data has been exported as a backup.');
                }, 100);
            }
        }
    });


    document.getElementById('settings-btn').addEventListener('click', () => {
        navigate('settings');
    });

    // --- INITIALIZATION ---
    loadData();
    render();
});


