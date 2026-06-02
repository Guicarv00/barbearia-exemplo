import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { X, Calendar, Clock, User, Phone, Check, Scissors } from 'lucide-react';
import { Service, BookingState } from '../types';
import { SERVICES_DATA, SHOP_INFO } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService: Service | null;
}

export default function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(preselectedService || SERVICES_DATA[0]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedService(preselectedService || SERVICES_DATA[0]);
      setSelectedDate('');
      setSelectedTime('');
      setSuccess(false);
      if (preselectedService) {
        setStep(2);
      } else {
        setStep(1);
      }
    }
  }, [isOpen, preselectedService]);

  if (!isOpen) return null;

  // Generate next 6 dates (excluding Sundays) starting from 2026-06-01 (Monday)
  const generateDates = () => {
    const dates = [];
    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    let current = new Date('2026-06-01T10:00:00Z'); // Match metadata time
    
    for (let i = 0; i < 7; i++) {
      const day = current.getDay();
      if (day !== 0) { // Exclude Sunday
        const dateStr = current.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        const weekdayStr = weekdays[day];
        dates.push({
          raw: current.toISOString().split('T')[0],
          formatted: `${weekdayStr}, ${dateStr}`,
          dayName: weekdayStr,
          dayNum: current.getDate()
        });
      }
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  // Generate hourly slots from 10:00 to 19:30
  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30'
  ];

  const dates = generateDates();

  const handleNextStep = () => {
    if (!selectedService) return;
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  const formatPhone = (val: string) => {
    const cleaned = ('' + val).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return val;
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    if (rawVal.length <= 11) {
      setClientPhone(rawVal);
    }
  };

  const getPhoneDisplayVal = () => {
    if (!clientPhone) return '';
    if (clientPhone.length <= 2) return `(${clientPhone}`;
    if (clientPhone.length <= 7) return `(${clientPhone.substring(0, 2)}) ${clientPhone.substring(2)}`;
    return `(${clientPhone.substring(0, 2)}) ${clientPhone.substring(2, 7)}-${clientPhone.substring(7, 11)}`;
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const matchedDate = dates.find(d => d.raw === selectedDate)?.formatted || selectedDate;

    // Generate custom WhatsApp API redirect
    const waText = 
`Olá, ${SHOP_INFO.name}! 💈

Gostaria de solicitar o agendamento de um horário de corte/barba:

🧑 *Cliente:* ${clientName}
📞 *Termo de Contato:* (${clientPhone.substring(0,2)}) ${clientPhone.substring(2,7)}-${clientPhone.substring(7)}
✂️ *Serviço:* ${selectedService.name}
💰 *Preço:* R$ ${selectedService.price.toFixed(2).replace('.', ',')}
📅 *Data Escolhida:* ${matchedDate}
🕒 *Horário:* ${selectedTime}
📝 *Observação:* ${clientNotes || 'Nenhuma'}

_${SHOP_INFO.motto}_`;

    const waLink = `https://api.whatsapp.com/send?phone=${SHOP_INFO.phoneRaw}&text=${encodeURIComponent(waText)}`;
    
    setSuccess(true);
    // Open in new window safely
    window.open(waLink, '_blank');
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService(SERVICES_DATA[0]);
    setSelectedDate('');
    setSelectedTime('');
    setClientName('');
    setClientPhone('');
    setClientNotes('');
    setSuccess(false);
    onClose();
  };

  return (
    <div id="booking-modal-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div 
        id="booking-modal-content" 
        className="relative w-full max-w-xl bg-[#0d0d0d]/95 border border-zinc-800/80 rounded-2xl shadow-2xl shadow-gold-950/20 overflow-hidden"
      >
        {/* Border lights */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

        {/* Head */}
        <div className="flex items-center justify-between p-6 bg-zinc-950/80 border-b border-zinc-800/40">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-950/50 border border-gold-500/30 text-gold-400">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white tracking-wide">Agendar Atendimento</h3>
              <p className="text-xs text-zinc-400">{SHOP_INFO.name} · Office Premium</p>
            </div>
          </div>
          <button 
            id="close-modal-btn"
            onClick={onClose} 
            className="p-1 px-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {success ? (
          /* SUCCESS VIEW */
          <div className="p-8 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-display text-xl font-bold text-white mb-2">Solicitação Enviada!</h4>
            <p className="text-zinc-300 text-sm max-w-sm mx-auto mb-6">
              Você foi redirecionado ao WhatsApp da barbearia para confirmar os detalhes do seu agendamento.
            </p>
            
            <div className="w-full text-left bg-zinc-950 p-4 border border-zinc-800/80 rounded-xl mb-6 text-xs space-y-2">
              <p className="text-zinc-500">RESUMO DA SOLICITAÇÃO:</p>
              <p className="text-zinc-200">💈 <strong className="text-white">Serviço:</strong> {selectedService?.name}</p>
              <p className="text-zinc-200">📅 <strong className="text-white">Data:</strong> {dates.find(d => d.raw === selectedDate)?.formatted || selectedDate}</p>
              <p className="text-zinc-200">🕒 <strong className="text-white">Horário:</strong> {selectedTime}</p>
              <p className="text-zinc-200">👤 <strong className="text-white">Cliente:</strong> {clientName}</p>
            </div>

            <button 
              id="success-close-btn"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 font-medium text-black transition font-display text-sm"
            >
              Concluir & Voltar ao Site
            </button>
          </div>
        ) : (
          /* FORM FLOW */
          <div className="p-6">
            {/* Step navigation dots */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className={`h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'w-8 bg-gold-400' : 'w-2 bg-zinc-700'}`} />
              <span className={`h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'w-8 bg-gold-400' : 'w-2 bg-zinc-700'}`} />
            </div>

            {step === 1 ? (
              /* STEP 1: SELECT SERVICE */
              <div className="space-y-4">
                <label className="block text-sm font-medium text-zinc-300 font-display">1. Escolha o serviço desejado</label>
                <div className="max-h-[250px] overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                  {SERVICES_DATA.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                        selectedService?.id === service.id
                          ? 'bg-gold-950/30 border-gold-500/80 text-white shadow-md shadow-gold-950/20'
                          : 'bg-zinc-950/50 border-zinc-800/80 hover:border-zinc-700 text-zinc-300 hover:text-white'
                      }`}
                    >
                      <div className="space-y-0.5 flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{service.name}</span>
                          {service.popular && (
                            <span className="px-1.5 py-0.5 text-[9px] font-bold bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded">
                              Recomendado
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 line-clamp-1">{service.description}</p>
                      </div>
                      <div className="text-right flex flex-col items-end">
                        <span className="font-bold text-sm text-gold-400">R$ {service.price.toFixed(2).replace('.', ',')}</span>
                        <span className="text-[10px] text-zinc-500">{service.duration} min</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    id="step1-next-btn"
                    onClick={handleNextStep}
                    disabled={!selectedService}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-gold-400 font-bold text-black border border-white hover:border-gold-400 font-display text-sm flex items-center justify-center gap-2 cursor-pointer transition duration-300 disabled:opacity-50"
                  >
                    Prosseguir para Horários
                  </button>
                </div>
              </div>
            ) : (
              /* STEP 2: DETAILS & DATETIME */
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                {/* Chosen service pill */}
                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 block">SERVIÇO SELECIONADO:</span>
                    <span className="font-bold text-sm text-white">{selectedService?.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className="text-xs font-medium text-gold-400 hover:underline"
                  >
                    Alterar serviço
                  </button>
                </div>

                {/* Day selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400 tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" /> SELECIONE O DIA:
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {dates.map((d) => (
                      <button
                        key={d.raw}
                        type="button"
                        onClick={() => setSelectedDate(d.raw)}
                        className={`p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          selectedDate === d.raw
                            ? 'bg-gold-500 border-gold-500 text-black font-bold scale-[1.03]'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        <span className="text-[10px] font-medium tracking-tight uppercase opacity-75">{d.dayName}</span>
                        <span className="text-base font-extrabold">{d.dayNum}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time selector */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400 tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" /> SELECIONE UM HORÁRIO DISPONÍVEL:
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-[120px] overflow-y-auto pr-1">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-1.5 rounded-lg border text-sm text-center font-medium transition ${
                          selectedTime === time
                            ? 'bg-gold-500 border-gold-500 text-black font-bold scale-[1.03]'
                            : 'bg-zinc-950 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Patient data details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
                      <User className="w-3 h-3 text-gold-400" /> Seu Nome completo *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-xl py-2 px-3 text-sm focus:outline-none"
                      placeholder="Ex: João Silva"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-400 flex items-center gap-1">
                      <Phone className="w-3 h-3 text-gold-400" /> Seu WhatsApp de Contato *
                    </label>
                    <input
                      type="text"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-xl py-2 px-3 text-sm focus:outline-none"
                      placeholder="Ex: (11) 99999-9999"
                      required
                      value={getPhoneDisplayVal()}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                {/* Additional instructions */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-400 block">Gostaria de informar algo ao barbeiro? (Opcional)</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-xl py-2 px-3 text-sm focus:outline-none"
                    placeholder="Ex: Quero navalhado bem raspado / prefiro corte na tesoura.."
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                  />
                </div>

                <div className="pt-4 flex flex-col-reverse sm:flex-row items-center gap-2">
                  <button
                    type="button"
                    onClick={handleBackStep}
                    className="w-full sm:w-auto px-5 py-3 rounded-full hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 font-display text-sm font-bold transition duration-200"
                  >
                    Voltar
                  </button>
                  <button
                    id="submit-booking-btn"
                    type="submit"
                    disabled={!selectedDate || !selectedTime || !clientName || clientPhone.length < 10}
                    className="w-full flex-1 px-5 py-3 rounded-full bg-gold-400 hover:bg-gold-500 font-bold text-black border border-gold-400 hover:border-gold-500 font-display text-sm flex items-center justify-center gap-2 cursor-pointer transition duration-300 disabled:opacity-50"
                  >
                    Enviar Solicitação no WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
