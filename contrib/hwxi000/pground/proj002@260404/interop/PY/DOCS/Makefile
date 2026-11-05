########################################################################

all::
all:: \
PY-system.pdf

########################################################################

.PHONY:: all
.PHONY:: clean
.PHONY:: cleanall

########################################################################

clean:: ; rm -f *~
clean:: ; rm -f PY-system.aux
clean:: ; rm -f PY-system.log
clean:: ; rm -f PY-system.out 
cleanall:: clean; rm -f PY-system.pdf

########################################################################

PY-system.pdf: \
PY-system.tex; \
pdflatex -interaction=nonstopmode -halt-on-error -jobname=PY-system PY-system.tex

########################################################################
###########################(end-of-[Makefile])##########################
########################################################################
