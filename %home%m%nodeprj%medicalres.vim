let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
let NERDUsePlaceHolders =  1 
let NERDCommentEmptyLines =  0 
let NERDMenuMode =  3 
let NERDDefaultNesting =  1 
let NetrwMenuPriority =  80 
let NERDToggleCheckAllLines =  0 
let NERDSpaceDelims =  0 
let NERDLPlace = "[>"
let NERDDefaultAlign = "none"
let NERDCreateDefaultMappings =  1 
let NERDTrimTrailingWhitespace =  0 
let NERDCommentWholeLinesInVMode =  0 
let NERDRPlace = "<]"
let NERDRemoveExtraSpaces =  0 
let NERDSuppressWarnings =  0 
let NERDRemoveAltComs =  1 
let NERDBlockComIgnoreEmpty =  0 
let NERDDisableTabsInBlockComm =  0 
let NERDCompactSexyComs =  0 
let NERDAllowAnyVisualDelims =  1 
let NetrwTopLvlMenu = "Netrw."
silent only
silent tabonly
cd ~/nodeprj/medicalres
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +8 libs/utils/tsconfig.lib.json
argglobal
%argdel
$argadd ~/nodeprj/medicalres
edit libs/utils/tsconfig.lib.json
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
2
normal! zo
let s:l = 8 - ((7 * winheight(0) + 11) / 23)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 8
normal! 0
lcd ~/nodeprj/medicalres
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
