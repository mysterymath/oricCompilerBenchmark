lda {m2}
sta {m1}
lda {m2}+1
sta {m1}+1
ldy {m3}
beq !e+
!:
asl {m1}
rol {m1}+1
dey
bne !-
!e:
