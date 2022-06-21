warner <- c(20,20,16,17,17,22,17,18,19)
disney <- c(11,13,11,8,12,11,12,8,10)
fox <- c(18,15,15,15,16,17,15,13,11)


peliculas <- matrix(c(warner, disney, fox),
                     nrow = 9,
                     ncol = 3
                     )

colnames(peliculas) <- c('warner', 'disney', 'fox')
rownames(peliculas) <- c(2010,2011,2012,2013,2014,2015,2016,2017,2018)

peliculas[6,]
# frutas <- c('manzana', 'banana', 'pera', 'sandia', 'durazno', 'uva')
# colores <- c('rojo', 'amarillo', 'verde', 'rosa', 'naranja', 'violeta')
# precios <- c(10,20,30,40,50,60)
# 
# 
# verduleria <- matrix(c(frutas, colores, precios),
#                      nrow = 6,
#                      ncol = 3
#                      )
# 
# colnames(verduleria) <- c('frutas', 'colores', 'precios')
# rownames(verduleria) <- c(1,2,3,4,5,6)
# 
# verduleria[c(3,1), c(2,3)]

