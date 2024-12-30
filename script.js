const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillators = {};
    let isMouseDown = false;
    let lastPlayedNote = null;

    function playNote(note) {
      if (!oscillators[note]) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = getFrequency(note);
        
        // Set initial gain to 0
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        // Smooth attack over 50ms
        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.05);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.start();
        oscillators[note] = { oscillator, gainNode };
        lastPlayedNote = note;
        
        // Add pressed class
        const key = document.querySelector(`.key[data-note="${note}"]`);
        if (key) key.classList.add('pressed');
      }
    }

    function stopNote(note) {
      if (oscillators[note]) {
        const gainNode = oscillators[note].gainNode;
        // Smooth release over 100ms
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);
        oscillators[note].oscillator.stop(audioContext.currentTime + 0.1);
        delete oscillators[note];
        
        // Remove pressed class
        const key = document.querySelector(`.key[data-note="${note}"]`);
        if (key) key.classList.remove('pressed');
      }
    }

    function getFrequency(note) {
      const notes = {
        'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13,
        'E4': 329.63, 'F4': 349.23, 'F#4': 369.99, 'G4': 392.00,
        'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
        'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25,
        'E5': 659.25, 'F5': 698.46, 'F#5': 739.99, 'G5': 783.99,
        'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77
      };
      return notes[note] || 440;
    }

    function getNoteFromElement(element) {
      return element?.dataset?.note;
    }

    document.addEventListener('mousedown', (e) => {
      isMouseDown = true;
      const note = getNoteFromElement(e.target);
      if (note) playNote(note);
    });

    document.addEventListener('mouseup', () => {
      isMouseDown = false;
      if (lastPlayedNote) stopNote(lastPlayedNote);
      lastPlayedNote = null;
    });

    document.addEventListener('mousemove', (e) => {
      if (isMouseDown) {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        const note = getNoteFromElement(element);
        if (note && note !== lastPlayedNote) {
          if (lastPlayedNote) stopNote(lastPlayedNote);
          playNote(note);
        }
      }
    });

    document.querySelectorAll('.key').forEach(key => {
      key.addEventListener('mouseleave', () => {
        if (isMouseDown) {
          const note = key.dataset.note;
          if (note === lastPlayedNote) {
            stopNote(note);
            lastPlayedNote = null;
          }
        }
      });
    });
