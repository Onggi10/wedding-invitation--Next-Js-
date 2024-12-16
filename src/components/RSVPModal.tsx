'use client';

import { useState } from 'react';

const RSVPModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="btn btn-primary">
        Konfirmasi Kehadiran
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Konfirmasi Kehadiran</h5>
              <button onClick={handleClose} className="close">&times;</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="attendance">Apakah Anda akan hadir?</label>
                  <select className="form-control" id="attendance" required>
                    <option value="">Pilih</option>
                    <option value="yes">Ya</option>
                    <option value="no">Tidak</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Pesan (Opsional)</label>
                  <textarea
                    className="form-control"
                    id="message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Kirim Konfirmasi
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVPModal;
