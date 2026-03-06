// Dữ liệu mẫu (có thể mở rộng)
const data = {
  teams: [
    { id: 1, name: 'Real Madrid', country: 'Tây Ban Nha', founded: 1902 },
    { id: 2, name: 'Manchester Vn', country: 'Anh', founded: 1880 },
    { id: 3, name: 'Bayern Munich', country: 'Đức', founded: 1900 },
    { id: 4, name: 'Paris Saint-Germain', country: 'Pháp', founded: 1970 }
  ],
  matches: [
    { id: 1, home: 'Real Madrid', away: 'Bayern Munich', date: '2025-12-10', comp: 'Champions League' },
    { id: 2, home: 'Manchester U', away: 'PSG', date: '2025-12-12', comp: 'Champions League' }
  ]
}

function el(selector){return document.querySelector(selector)}

function renderTeams(list){
  const container = el('#teamsList')
  container.innerHTML = ''
  list.forEach(t => {
    const div = document.createElement('div')
    div.className = 'card'
    div.innerHTML = `<h3>${t.name}</h3><div class="muted">${t.country}</div><div class="muted">Thành lập: ${t.founded}</div>`
    container.appendChild(div)
  })
}

function renderMatches(list){
  const ul = el('#matchesList')
  ul.innerHTML = ''
  list.forEach(m => {
    const li = document.createElement('li')
    li.className = 'match'
    li.innerHTML = `<div><strong>${m.home}</strong> vs <strong>${m.away}</strong> <div class="muted">${m.comp}</div></div><div class="muted">${m.date}</div>`
    ul.appendChild(li)
  })
}

function init(){
  renderTeams(data.teams)
  renderMatches(data.matches)

  // Tìm kiếm
  const search = el('#search')
  search.addEventListener('input', (e)=>{
    const q = e.target.value.trim().toLowerCase()
    if(!q){ renderTeams(data.teams); renderMatches(data.matches); return }
    const teamsFiltered = data.teams.filter(t => t.name.toLowerCase().includes(q) || t.country.toLowerCase().includes(q))
    const matchesFiltered = data.matches.filter(m => m.home.toLowerCase().includes(q) || m.away.toLowerCase().includes(q) || m.comp.toLowerCase().includes(q))
    renderTeams(teamsFiltered)
    renderMatches(matchesFiltered)
  })

  // Chuyển chế độ sáng/tối
  const toggle = el('#toggleTheme')
  toggle.addEventListener('click', ()=>{
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
    toggle.textContent = isDark ? 'Chế độ tối' : 'Chế độ sáng'
    toggle.setAttribute('aria-pressed', (!isDark).toString())
  })
}

// Khởi tạo khi DOM sẵn sàng
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', init)
}else{ init() }
