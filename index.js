const sample = {
  contact: {
    name: { yourname: 'BALASATISH KUMAR', surname: 'INJARAPU', nickname: 'BALA' },
    email: 'SATISH1074@GMAIL.COM',
    phone: { peronal: '8310943479', family: '9912969565' },
    location: { current: 'BANGALORE', perment: 'RAJAHMUNDRY' }
  },
  personal: {
    birth: { date: '08/07/1994', time: '1:30AM', place: 'POTULURU' },
    horoscope: { nakshatra: 'ARDHRA', zodiac: 'GEMINI', manglik: 'NO' },
    lineage: { religion: 'HINDU', gothra: 'JANAKULA', caste: 'KAPU' },
    intake: { food: 'VEG', drink: 'NO', smoke: 'NO' },
    physique: { skintone: 'FAIR', height: '6', wight: '60', blood: 'B+' },
    statement: 'LOVE TO ACHEIVE'
  },
  work: [{
    company: '', position: '', year: '', location: '', salary: ''
  }],
  education: [{ school: '', field: '', year: '', location: '', percentage: '' }],
  family: [{ name: '', relation: '', location: '', education: '', work: '' }],
};

function flatJSON(object) {
  let output = {};
  function rec(obj, path) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      const newObj = { [path.join('.')]: obj };
      output = { ...output, ...newObj };
      return;
    }
    const keys = Object.keys(obj);
    for (const key of keys) {
      rec(obj[key], [...path, key]);
    }
  }
  rec(object, []);
  return output;
}
console.log(flatJSON(sample));
