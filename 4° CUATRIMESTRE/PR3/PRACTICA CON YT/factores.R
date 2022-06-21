####################
#                  #
# Copiar todo esto #
#                  #
####################
# Hecho con gusto por Rafa @GonzalezGouveia

# video 07 - factores

# Objetivo: estudiar qué son factores en R.
# ---------------
# En este ejercicio vamos a:
# 1. Crear factores en R
# 2. Recodificar niveles de un factor
# 3. Ordenar niveles de un factor


#####################################
# correr esto antes de empezar.   #
#####################################

# crear vector de ventas
#tallas <- c('m', 'g', 'S', 'S','m', 'M')
tallas2 <- c('L', 'm', 'm', 'L', 'xl','xxl', 's' ,'S','XL','L'
            ,'M','S','L','XL','S','xl','L','L','XL','M','l')
# intentar graficar
#plot(tallas)

###################################
# práctica 1: crear factores en R #
###################################

# crear factor de un vector
tallas_factor <- factor(tallas2)

tallas_factor_bueno <- factor(tallas2,
                              ordered = TRUE,
                              levels = c('s', 'm', 'l', 'xl', 'xxl', 'S', 'M', 'L' ,'XL'),
                              labels = c('S', 'M',' L', 'XL', 'XXL' , 'S', 'M',' L', 'XL'))
# graficar factor
plot(tallas_factor_bueno)

# mirar niveles de factor

levels(tallas_factor_bueno)
tallas_factor_bueno
######################################
# práctica 2: recodificando factores #
######################################

# creando factor recodificado




# graficando ventas_recodificado


#############################################
# práctica 3: ordenando niveles de factores #
#############################################

# ordenando niveles (copiar factor anterior)





# viendo el orden en los niveles


# graficando el factor ordenado


# Hecho con gusto por Rafa @GonzalezGouveia
# Suscribete para más código en R https://bit.ly/2WNDhNR