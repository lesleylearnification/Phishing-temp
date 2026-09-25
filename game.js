const rounds=[
{name:'ACCOUNT TAKEOVER',goal:'Turn a routine Schoology notification into a convincing account-verification lure.',type:'PASSWORD',from:'Schoology Notifications <no-reply@schoology.com>',subject:'New Assignment Posted in Schoology',body:`<div class="mailBrand schoologyBrand">SCHOOL<span>O</span>GY <small>Carlisle Area School District</small></div><p>Hello,</p><p>A new assignment has been posted in your course.</p><div class="mailCard"><b>Course:</b> Cybersecurity Awareness Training<br><b>Assignment:</b> Complete Module 1: Recognizing Phishing Attempts<br><b>Due Date:</b> Friday, September 25, 2026 at 11:59 PM<br><b>Posted By:</b> Technology Department</div><p><span class="cta">View Assignment</span></p><p class="mailFine">You are receiving this notification because you are enrolled in this course.</p>`,takeaway:'DEFENDER TAKEAWAY: Check the full sender address, whether the account request was expected, urgency, where the button actually leads, and whether the message follows Carlisle’s normal Schoology workflow.',cats:[
['Sender identity',[['Obvious outsider','Schoology Help <support@account-help.example>',1,'The unrelated domain gives the recipient an obvious reason to stop.'],['Look-alike identity','Schoology Support <support@schoology-help.example>',2,'A near-match service identity may survive a quick glance but fails careful address inspection.'],['Trusted display identity','Schoology Support <noreply@schoology-secure.example>',3,'A familiar display identity borrows trust while leaving the domain as the key defensive cue.']]],
['Subject line',[['Generic alarm','URGENT SCHOOL ACCOUNT PROBLEM',1,'Generic alarm language is conspicuous.'],['Plausible warning','Schoology account security notice',2,'A believable service warning creates concern without looking purely sensational.'],['Contextual consequence','Action required: verify your Schoology account',3,'A specific account consequence can make an unexpected request feel routine.']]],
['Urgency',[['Extreme threat','ACT NOW OR YOUR ACCOUNT IS DELETED',1,'Over-the-top threats are easier to recognize as suspicious.'],['Time pressure','Verify by 5:00 PM today to avoid interruption',2,'A deadline can reduce the time a recipient spends checking.'],['Operational pressure','Complete verification before your next Schoology sign-in',3,'Pressure tied to a familiar workflow can feel more credible.']]],
['Link presentation',[['Visible mismatch','Open school-login-check.example',1,'An unfamiliar destination is easier to question.'],['Branded button','Verify My Account',2,'A branded action can obscure the destination from a casual reader.'],['Workflow framing','Continue to Schoology verification',3,'A familiar workflow label can encourage action before verification.']]],
['Brand/context',[['Sloppy imitation','Use mismatched district branding and awkward wording',1,'Poor consistency creates obvious reasons to stop.'],['Clean imitation','Match the Schoology and Carlisle visual language',2,'Visual familiarity can borrow credibility.'],['Personal context','Reference the recipient’s course and normal Schoology workflow',3,'Relevant context can reduce suspicion while still leaving verifiable cues.']]]]},
{name:'PAYROLL SWITCH',goal:'Turn a legitimate district salary-schedule share into a fraudulent payroll-change request.',type:'MONEY',from:'Dr. Kevin Matthews <kmatthews@carlisle-k12.org>',subject:'Dr. Matthews shared a file with you',body:`<p>Hi,</p><p>Dr. Matthews shared the following document with you:</p><div class="mailCard driveCard"><b>Updated Staff Salary Schedule 2026-27</b><br><span>Dr. Kevin Matthews (kmatthews@carlisle-k12.org) shared this file with you.</span><br><span class="cta">Open</span></div><p>This file has been shared using Google Drive. Click the button above to view the document.</p><p>Thanks,<br>Dr. Kevin Matthews<br>Superintendent<br>Carlisle Area School District</p><img class="districtLogo" src="carlisle-brand.png" alt="Carlisle Area School District — Learners Today. Leaders Tomorrow.">`,takeaway:'DEFENDER TAKEAWAY: For payroll or payment changes, verify the full sender, the business context, the requested financial change, pressure, and the verification path using a trusted channel outside the message.',cats:[
['Sender identity',[['Unknown administrator','District Payroll <payroll@outside-mail.example>',1,'An unexpected identity creates immediate friction.'],['District look-alike','Dr. Kevin Matthews <kmatthews@carlisle-k12.example>',2,'A subtle domain variation can exploit a familiar name.'],['Familiar display identity','Dr. Kevin Matthews | CASD <payroll@carlisle-payments.example>',3,'A familiar authority figure can be trusted before the underlying address is checked.']]],
['Business context',[['Random request','Ask for an unrelated purchase or transfer',1,'A request disconnected from district work is easier to challenge.'],['Salary context','Tie the request to the new salary schedule',2,'Existing context increases plausibility.'],['Expected workflow','Frame the request as a follow-up to the shared 2026–27 salary schedule',3,'A request embedded in a real-looking workflow can feel routine.']]],
['Payment change',[['Huge unusual change','Request an obviously abnormal transfer',1,'A dramatic deviation invites verification.'],['Direct-deposit update','Say payroll details must be updated',2,'Financial-account changes are a strong reason to verify independently.'],['Procedural update','Frame new payroll instructions as part of the annual salary-system update',3,'Routine administrative framing can disguise a consequential change.']]],
['Pressure',[['Threaten immediately','RESPOND NOW OR PAY WILL BE WITHHELD',1,'Extreme threats conflict with normal administrative communication.'],['Deadline pressure','Complete the update before end of day',2,'Time pressure reduces verification time.'],['Process pressure','Complete before the next payroll processing window',3,'Pressure tied to a normal deadline can feel operational.']]],
['Verification path',[['No explanation','Demand secrecy and no questions',1,'Explicit secrecy is a strong red flag.'],['Email-only confirmation','Tell the recipient to reply to this email with questions',2,'Keeping verification inside the same channel is risky.'],['Plausible handoff','Claim district payroll has already approved the change',3,'Claims of internal approval can discourage independent verification.']]]]},
{name:'DOCUMENT DROP',goal:'Turn a legitimate staff-meeting agenda into a convincing malicious-file lure.',type:'MACHINE',from:'Jason Miller <jmiller@carlisleschools.org>',subject:'Reminder: September Staff Meeting',body:`<p>Hello Carlisle Team,</p><p>This is a friendly reminder that our September staff meeting will be held on Tuesday, September 17, 2026, at 3:30 PM in the high school library. We’ll be discussing upcoming events, district updates, and important information for the fall semester.</p><p>The meeting agenda is attached for your review.</p><p>Thank you for all you do!</p><p><b>Jason Miller</b><br>Assistant Principal<br>Carlisle High School<br>Carlisle Area School District</p><img class="districtLogo" src="carlisle-brand.png" alt="Carlisle Area School District — Learners Today. Leaders Tomorrow.">`,attachment:'September_Staff_Meeting_Agenda.pdf',takeaway:'DEFENDER TAKEAWAY: Check who sent the file, whether you expected that exact document, the real file type or sharing method, the requested action, and pressure or curiosity designed to make you open it.',cats:[
['Sender/context',[['Unknown sender','Documents Team <files@random-share.example>',1,'An unfamiliar sender weakens the story.'],['Known-name imitation','Jason Miller <jmiller@carlisle-files.example>',2,'A recognizable name can mask an unfamiliar address.'],['Expected collaborator','Jason Miller | Carlisle High School <share@carlisle-docs.example>',3,'Expected context can make recipients less likely to scrutinize the delivery path.']]],
['Document premise',[['Unrelated file','Confidential payroll list',1,'Unexpected subject matter should trigger caution.'],['Relevant document','Updated September staff-meeting agenda',2,'Relevant content makes the file more plausible.'],['Natural revision','Revised agenda with the schedule change discussed this morning',3,'A believable continuation of existing work increases trust.']]],
['Attachment presentation',[['Odd file','September_Agenda.scr',1,'An unexpected file type is a strong warning sign.'],['Misleading label','September_Staff_Meeting_Agenda.pdf.html',2,'A filename can appear familiar at a glance while deserving closer inspection.'],['Familiar-looking share','September Staff Meeting Agenda — shared document',3,'A normal-looking document workflow can lower suspicion; unexpected files still need verification.']]],
['Call to action',[['Vague command','OPEN THIS NOW',1,'A vague command provides little legitimate context.'],['Review request','Open and review the updated agenda',2,'A normal work action is more believable.'],['Specific task','Check the revised agenda and confirm your assigned session',3,'A concrete task can make interaction feel purposeful and routine.']]],
['Attention hook',[['Panic','Security incident details inside attachment',1,'A dramatic mismatch with the conversation is suspicious.'],['Urgency','Need your review before today ends',2,'Time pressure encourages faster action.'],['Curiosity/context','I added the change we discussed for Thursday',3,'A contextual curiosity hook can prompt interaction without obvious alarm language.']]]]}];
let r=0,selected={},totalXp=0,history=[];const $=s=>document.querySelector(s);const screens=['start','game','result','final','memo','resources'];
function show(id){screens.forEach(x=>$('#'+x).classList.toggle('active',x===id));document.body.classList.toggle('onStart',id==='start');window.scrollTo(0,0)}
function reset(){r=0;selected={};totalXp=0;history=[];feedbackArrowShown=false;$('#xpHud').textContent='0';$('#roundHud').textContent='1/3';$('#reflection').value='';show('start')}
function emailMarkup(d,choices,benchmark=false){let from=d.from,subject=d.subject,body=d.body,attachment=d.attachment||'';Object.entries(choices).forEach(([k,v])=>{const name=d.cats[k][0],o=d.cats[k][1][benchmark?2:v.choice];if(name==='Sender identity'||name==='Sender/context')from=o[1];else if(name==='Subject line')subject=o[1];else if(name==='Attachment presentation')attachment=o[1];else body+=`<p class="changed"><b>${name}:</b> ${o[1]}</p>`});return `<article class="email"><div class="emailMeta"><p><b>From:</b> ${from}</p><p><b>Subject:</b> ${subject}</p></div><div class="emailBody">${body}</div>${attachment?`<div class="attachment">ATTACHMENT · ${attachment}</div>`:''}</article>`}
function renderRound(){selected={};const d=rounds[r];$('#roundHud').textContent=`${r+1}/3`;$('#campaignNum').textContent=`${r+1} OF 3`;$('#campaignName').textContent=d.name;$('#campaignGoal').textContent=d.goal;$('#emailType').textContent=d.type+' CAMPAIGN';$('#from').textContent=d.from;$('#subject').textContent=d.subject;$('#emailBody').innerHTML=d.body;$('#attachment').classList.toggle('hidden',!d.attachment);$('#attachment').textContent=d.attachment?'ATTACHMENT · '+d.attachment:'';$('#selectedCount').textContent='0';$('#status').textContent='BUILDING';$('#statusSub').textContent='Target unaware';$('#integrityBar').style.width='100%';$('#integrityText').textContent='100% LEGITIMATE';$('#send').disabled=true;$('#send span').textContent='0/5';const c=$('#categories');c.innerHTML='';d.cats.forEach((x,i)=>{const b=document.createElement('button');b.type='button';b.className='cat';b.dataset.i=i;b.innerHTML=`<span>${i+1}. ${x[0]}</span>`;b.addEventListener('click',()=>openCat(i));c.appendChild(b)});$('#options').innerHTML='<p class="empty">Select a category to inspect its alteration choices.</p>';show('game')}
function highlightCurrentEmail(i){
  document.querySelectorAll('#game .email .inspectCurrent').forEach(el=>el.classList.remove('inspectCurrent'));
  const name=rounds[r].cats[i][0];
  let target=null;
  if(name==='Sender identity'||name==='Sender/context') target=$('#from');
  else if(name==='Subject line') target=$('#subject');
  else if(name==='Attachment presentation') target=$('#attachment');
  else target=$('#emailBody');
  if(target) target.classList.add('inspectCurrent');
}
function openCat(i){document.querySelectorAll('.cat').forEach(x=>x.classList.toggle('selected',+x.dataset.i===i));highlightCurrentEmail(i);const [name,opts]=rounds[r].cats[i];$('#options').innerHTML=`<small>ALTER ${name.toUpperCase()}</small>`;opts.forEach((o,j)=>{const b=document.createElement('button');b.type='button';b.className='option'+(selected[i]?.choice===j?' chosen':'');b.textContent=o[0]+' — '+o[1];b.addEventListener('click',()=>choose(i,j));$('#options').appendChild(b)})}
function choose(i,j){selected[i]={choice:j,score:rounds[r].cats[i][1][j][2]};document.querySelectorAll('.cat').forEach(x=>x.classList.toggle('complete',selected[+x.dataset.i]!==undefined));openCat(i);const n=Object.keys(selected).length;$('#selectedCount').textContent=n;$('#send span').textContent=`${n}/5`;$('#send').disabled=n!==5;$('#integrityBar').style.width=Math.max(5,100-n*19)+'%';$('#integrityText').textContent=n?`${n} OF 5 ALTERED`:'100% LEGITIMATE';preview()}
function preview(){const d=rounds[r];$('#from').textContent=d.from;$('#subject').textContent=d.subject;$('#emailBody').innerHTML=d.body;$('#attachment').classList.toggle('hidden',!d.attachment);$('#attachment').textContent=d.attachment?'ATTACHMENT · '+d.attachment:'';Object.entries(selected).forEach(([k,v])=>{const name=d.cats[k][0],o=d.cats[k][1][v.choice];if(name==='Sender identity'||name==='Sender/context')$('#from').innerHTML=`<span class="changed">${o[1]}</span>`;else if(name==='Subject line')$('#subject').innerHTML=`<span class="changed">${o[1]}</span>`;else if(name==='Attachment presentation'){$('#attachment').classList.remove('hidden');$('#attachment').innerHTML=`<span class="changed">ATTACHMENT · ${o[1]}</span>`}else $('#emailBody').insertAdjacentHTML('beforeend',`<p class="changed"><b>${name}:</b> ${o[1]}</p>`)})}
$('#send').addEventListener('click',()=>{const d=rounds[r],score=Object.values(selected).reduce((a,b)=>a+b.score,0);let band,xp,title,body,target;if(score<=8){band='LOW';xp=100;title='TARGET CAUGHT THE PHISH';body='Your build left multiple cues that encouraged the recipient to stop and verify.';target='DETECTED'}else if(score<=12){band='MEDIUM';xp=250;title='TARGET HESITATED';body='Your message looked plausible, but one or more components still exposed the deception.';target='STOPPED'}else{band='HIGH';xp=500;title='TARGET TOOK THE BAIT';body='Your five choices closely matched the benchmark pattern and overcame the target’s initial skepticism.';target='FOOLED'}totalXp+=xp;$('#xpHud').textContent=totalXp;$('#resultTitle').textContent=title;$('#resultBody').textContent=body;$('#roundXp').textContent=`${band} · ${xp} / 500 XP`;$('#effectiveness').textContent=`${score} / 15`;$('#targetState').textContent=target;$('#yourScore').textContent=`${score}/15`;$('#yourEmail').innerHTML=emailMarkup(d,selected,false);const benchmark={0:{choice:2},1:{choice:2},2:{choice:2},3:{choice:2},4:{choice:2}};$('#benchmarkEmail').innerHTML=emailMarkup(d,benchmark,true);$('#roundTakeaway').innerHTML=`<strong>${d.type} // WHAT TO CHECK</strong><span>${d.takeaway.replace('DEFENDER TAKEAWAY: ','')}</span>`;history.push({name:d.name,type:d.type,band,xp,score});$('#next').textContent=r<2?'NEXT CAMPAIGN →':'SEE FINAL DEBRIEF →';show('result');setupFeedback(d,score);if(r===0)setTimeout(()=>openTutorial('feedback'),120)});
$('#next').addEventListener('click',()=>{if(r<2){r++;renderRound()}else finish()});
$('#memoBtn').addEventListener('click',()=>{const v=$('#reflection').value.trim();$('#memoText').textContent=v||'No notes entered.';show('memo')});
$('#resourcesBtn').addEventListener('click',()=>show('resources'));
function finish(){const f=$('#finalCards');f.innerHTML='';history.forEach(h=>{const x=document.createElement('div');x.className='finalCard';x.innerHTML=`<b>${h.type} · ${h.name}</b><span>${h.band} XP outcome · effectiveness ${h.score}/15</span>`;f.appendChild(x)});$('#finalXpEarned').textContent=totalXp;show('final')}
$('#startBtn').addEventListener('click',()=>{renderRound(); setTimeout(()=>openTutorial('build'),120)});$('#restart').addEventListener('click',reset);$('#again').addEventListener('click',reset);


// V3: paired-hotspot forensic feedback
let analyzed=new Set(),activeElement=null,lastFeedbackTrigger=null;
const defenderLens={
  'Sender identity':'Check the full sender address, not just the display name. A familiar name can sit beside an unfamiliar domain.',
  'Sender/context':'Confirm both the sender address and whether this person normally sends this kind of file or request.',
  'Subject line':'Treat a plausible subject as context, not proof. Compare it with what you were actually expecting.',
  'Urgency':'Notice deadlines or consequences designed to shorten your checking time. Urgency is a cue to verify, not rush.',
  'Link presentation':'Inspect where a link or button really leads before acting. Familiar button text does not prove the destination is legitimate.',
  'Brand/context':'Familiar tone and branding can be copied. Verify whether the request fits the organization’s normal workflow.',
  'Business context':'A request can sound work-related and still be false. Check whether it matches the real project, timing, and process.',
  'Payment change':'Any change to banking or payment instructions deserves independent verification through a trusted channel.',
  'Pressure':'Pressure tied to a real deadline can be especially persuasive. Slow down when a message tries to make verification feel costly.',
  'Verification path':'Do not let the suspicious message control how you verify it. Use a known phone number, known contact, or established process.',
  'Document premise':'Ask whether you were expecting this exact document and whether its subject fits the current conversation.',
  'Attachment presentation':'Check the real file type and delivery method. A familiar-looking filename or share label is not enough.',
  'Call to action':'Specific tasks can make a message feel routine. Verify the request before opening, signing in, enabling, or approving.',
  'Attention hook':'Curiosity and urgency can both bypass careful checking. Contextual hooks deserve the same scrutiny as obvious alarms.'
};
function hotspotEmailMarkup(d,choices,benchmark=false){
  let from=d.from,subject=d.subject,attachment=d.attachment||'',body=d.body;
  const extras=[];
  d.cats.forEach((cat,k)=>{
    const name=cat[0],v=choices[k],o=cat[1][benchmark?2:v.choice];
    if(name==='Sender identity'||name==='Sender/context') from=`<button type="button" class="hotspot hotspotButton" data-hotspot="${k+1}" data-element="${k}" aria-label="Compare element ${k+1}, ${name}">${o[1]}</button>`;
    else if(name==='Subject line') subject=`<button type="button" class="hotspot hotspotButton" data-hotspot="${k+1}" data-element="${k}" aria-label="Compare element ${k+1}, ${name}">${o[1]}</button>`;
    else if(name==='Attachment presentation') attachment=`<button type="button" class="hotspot hotspotButton" data-hotspot="${k+1}" data-element="${k}" aria-label="Compare element ${k+1}, ${name}">ATTACHMENT · ${o[1]}</button>`;
    else extras.push(`<button type="button" class="hotspot hotspotButton bodyHotspot" data-hotspot="${k+1}" data-element="${k}" aria-label="Compare element ${k+1}, ${name}"><b>${name}:</b> ${o[1]}</button>`);
  });
  return `<article class="email"><div class="emailMeta"><p><b>From:</b> ${from}</p><p><b>Subject:</b> ${subject}</p></div><div class="emailBody">${body}${extras.join('')}</div>${attachment?`<div class="attachment">${attachment}</div>`:''}</article>`;
}
function setupFeedback(d,score){
  analyzed=new Set(); activeElement=null;
  $('#analysisCount').textContent='0/5';
  $('#yourEmail').innerHTML=hotspotEmailMarkup(d,selected,false);
  const benchmark={0:{choice:2},1:{choice:2},2:{choice:2},3:{choice:2},4:{choice:2}};
  $('#benchmarkEmail').innerHTML=hotspotEmailMarkup(d,benchmark,true);
  const key=$('#elementKey'); key.innerHTML='';
  d.cats.forEach((cat,k)=>{
    const b=document.createElement('button'); b.type='button'; b.className='keyButton'; b.dataset.element=k;
    b.innerHTML=`<span class="num">${k+1}</span><span>${cat[0]}</span>`;
    b.addEventListener('click',()=>openFeedback(k,b)); key.appendChild(b);
  });
  document.querySelectorAll('.hotspotButton').forEach(b=>b.addEventListener('click',()=>openFeedback(+b.dataset.element,b)));
  $('#next').disabled=true;
  $('#roundTakeaway').classList.add('lockedTakeaway');
  $('#roundTakeaway').innerHTML='<strong>DEFENDER TAKEAWAY</strong><span>Explore the five hotspots to unlock the campaign takeaway.</span>';
  closeFeedback(false);
}
function openFeedback(k,trigger){
  const d=rounds[r],cat=d.cats[k],mine=cat[1][selected[k].choice],best=cat[1][2],max=mine[2]===3;
  lastFeedbackTrigger=trigger||document.activeElement; activeElement=k; analyzed.add(k);
  $('#analysisCount').textContent=`${analyzed.size}/5`;
  document.querySelectorAll('.keyButton').forEach(b=>{const n=+b.dataset.element;b.classList.toggle('active',n===k);b.classList.toggle('visited',analyzed.has(n))});
  document.querySelectorAll('.hotspotButton').forEach(b=>{const n=+b.dataset.element;b.classList.toggle('activeHotspot',n===k);b.classList.toggle('dimHotspot',n!==k)});
  $('#feedbackTitle').textContent=`${k+1}. ${cat[0]}`;
  $('#feedbackScore').textContent=`YOUR SCORE · ${mine[2]}/3 XP`;
  $('#feedbackStatus').textContent=max?'✓ MAX XP':'↑ COULD BE STRONGER';
  $('#feedbackMine').textContent=`${mine[0]} — ${mine[1]}`;
  $('#feedbackBest').textContent=`${best[0]} — ${best[1]}`;
  $('#feedbackWhy').textContent=max?mine[3]:`${mine[3]} The benchmark reduces that warning signal by making the request feel more consistent with the surrounding context.`;
  $('#feedbackDefender').textContent=defenderLens[cat[0]]||'Compare this element with what you normally expect before trusting the message.';
  $('#prevElement').disabled=k===0; $('#nextElement').disabled=k===4;
  $('#feedbackPanel').classList.remove('hidden'); $('#feedbackBackdrop').classList.remove('hidden'); $('#feedbackBackdrop').setAttribute('aria-hidden','false');
  $('#closeFeedback').focus();
  if(analyzed.size===5){
    $('#roundTakeaway').classList.remove('lockedTakeaway');
    $('#roundTakeaway').innerHTML=`<strong>${d.type} // DEFENDER TAKEAWAY</strong><span>${d.takeaway.replace('DEFENDER TAKEAWAY: ','')}</span>`;
    $('#next').disabled=false;
  }
}
function closeFeedback(returnFocus=true){
  $('#feedbackPanel').classList.add('hidden'); $('#feedbackBackdrop').classList.add('hidden'); $('#feedbackBackdrop').setAttribute('aria-hidden','true');
  document.querySelectorAll('.hotspotButton').forEach(b=>{b.classList.remove('activeHotspot','dimHotspot')}); document.querySelectorAll('.keyButton').forEach(b=>b.classList.remove('active'));
  if(returnFocus&&lastFeedbackTrigger&&lastFeedbackTrigger.focus) lastFeedbackTrigger.focus();
}
$('#closeFeedback').addEventListener('click',()=>closeFeedback());
$('#prevElement').addEventListener('click',()=>{if(activeElement>0)openFeedback(activeElement-1,$(`.keyButton[data-element="${activeElement-1}"]`))});
$('#nextElement').addEventListener('click',()=>{if(activeElement<4)openFeedback(activeElement+1,$(`.keyButton[data-element="${activeElement+1}"]`))});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#feedbackPanel').classList.contains('hidden'))closeFeedback()});


// V6 contextual onboarding
const tutorialCopy={
  landing:{kicker:"YOU’RE THE HACKER.",title:'Can you craft a convincing phishing email?',html:'<p>You have three chances to craft phishing emails designed to fool people.</p>'},
  build:{kicker:'ACCOUNT TAKEOVER',title:'Falsify all five.',html:'<p>You have five ways to falsify this email. As you click each one on the right, pick the best choice of three on the bottom.</p><p>The word <b>“ALTERED”</b> will appear next to your choice. Do this for the other four types of falsification.</p><p>When you’ve altered all five, begin your crime wave by clicking <b>SEND EMAIL</b>.</p>'},
  feedback:{kicker:'SPOT THE DIFFERENCES',title:'Compare the two emails.',html:'<p>Compare your work (left) with that of a true criminal mastermind (right).</p><p>Click each number to see feedback on all five of your choices. Once you click all five, click <b>NEXT CAMPAIGN</b>.</p>'}
};
let lastTutorialFocus=null,currentTutorialKind=null,feedbackArrowShown=false;
function openTutorial(kind){const t=tutorialCopy[kind];if(!t)return;currentTutorialKind=kind;lastTutorialFocus=document.activeElement;$('#tutorialKicker').textContent=t.kicker;$('#tutorialTitle').textContent=t.title;$('#tutorialText').innerHTML=t.html;$('#tutorial').classList.remove('hidden');$('#tutorialOk').focus()}
function showFirstHotspotArrow(){
  if(feedbackArrowShown||r!==0)return;
  const target=document.querySelector('#yourEmail .hotspotButton[data-element="0"]');
  if(!target)return;
  feedbackArrowShown=true;
  const a=document.createElement('div');a.className='firstHotspotArrow';a.setAttribute('aria-hidden','true');a.textContent='➜';document.body.appendChild(a);
  const place=()=>{const q=target.getBoundingClientRect();a.style.left=Math.max(8,q.left-78)+'px';a.style.top=Math.max(8,q.top-17)+'px'};place();
  window.addEventListener('resize',place,{once:true});
  setTimeout(()=>a.remove(),2000);
}
function closeTutorial(){ const wasFeedback=currentTutorialKind==='feedback'; $('#tutorial').classList.add('hidden'); currentTutorialKind=null; if(lastTutorialFocus&&lastTutorialFocus.focus)lastTutorialFocus.focus(); if(wasFeedback)setTimeout(showFirstHotspotArrow,80) }
$('#tutorialOk').addEventListener('click',closeTutorial);$('#tutorialClose').addEventListener('click',closeTutorial);
$('#tutorial').addEventListener('click',e=>{if(e.target===$('#tutorial'))closeTutorial()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#tutorial').classList.contains('hidden'))closeTutorial()});
reset();
setTimeout(()=>openTutorial('landing'),180);
