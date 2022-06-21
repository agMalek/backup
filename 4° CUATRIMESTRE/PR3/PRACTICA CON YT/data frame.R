nombres <- c('Shrek 1', 'Shrek 2','Shrek 3','Shrek 4')
puntos <- c(7.9, 7.2 , 6.1 , 6.3)
posterior_2005 <- c(FALSE, FALSE, TRUE ,TRUE)

nombres
puntos
posterior_2005

pelis <- data.frame(nombres,puntos,posterior_2005)

names(pelis) <- c('NOMBRES', 'PUNTOS', 'POSTERIOR A 2005')

pelis[3,2]
pelis[3,'PUNTOS']


pelis[c(3,4), c(2,3)]
pelis[c(2,1), c('NOMBRES','PUNTOS')]

ordenMenorAMayor <- order(pelis$PUNTOS, decreasing = FALSE)
ordenMenorAMayor
ordenMayorAMenor <-order(pelis$PUNTOS, decreasing = TRUE)
ordenMayorAMenor



pelisOrdenadas <- pelis[ordenMayorAMenor,]
pelisOrdenadas
pelis

###################LISTAS#########################



warner <- c(20,20,16,17,17,22,17,18,19)
disney <- c(11,13,11,8,12,11,12,8,10)
fox <- c(18,15,15,15,16,17,15,13,11)


vector_titulos <- nombres
matriz_pelis2 <- matrix(c(warner, disney, fox),
                       nrow = 9,
                       ncol = 3)

colnames(matriz_pelis2) <- c('WARNER', 'DISNEY', 'FOX')

df_pelis <- data.frame(nombres, puntos, posterior_2005)


lista_curso <- list(vector_titulos,
                    matriz_pelis2)



names(lista_curso) <- c('VECTOR', 'MATRIZ')


lista_curso[['MATRIZ']][4,'FOX']


lista_curso[['VECTOR']] <- NULL

