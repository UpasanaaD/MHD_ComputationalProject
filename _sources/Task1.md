---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Task 1

The diffusion equation in MHD is given by:

$$
\frac{\partial \bar{B}}{\partial t}=-\nabla \times (\eta_T \nabla \times \bar{B}).
$$

Where $\eta_T = \eta + \eta_t $, $\eta$ being the microscopic diffusivity and $\eta_t$ being the turbulent diffusivity, is assumed constant. Thus,

$$
\frac{\partial \bar{B}}{\partial t}=-\eta_T \nabla^2 \bar{B}
$$

Using the formula for vector laplacian and assuming axisymmetric solutions-

$$
\frac{\partial B_i}{\partial t}=\eta_T\left\{\frac{\partial}{\partial r}\left[\frac{1}{2} \frac{\partial}{\partial r}\left(r B_i\right)\right]-\frac{\partial B_i}{\partial z^2}\right\}
$$

Now, we make use of the no-z approximation and replace- $$\partial / \partial z \rightarrow \pi / (2h )$$ and $$\partial^2 / \partial z^2 \rightarrow- (\pi / 2h)^2$$.

$$

\frac{\partial B_i}{\partial t}=\eta_T\left\{\frac{\partial}{\partial r}\left[\frac{1}{2} \frac{\partial}{\partial r}\left(r B_i\right)\right]-\frac{\pi^2 B_i}{4 h^2}\right\}
$$

This is solved using the numerical approaches of Finite Difference Method to calculate spatial derivatives and Runge Kutta Method (RK4) for time-stepping.

### Finite Difference Method

This method depends on the numerical approximation of derivatives, which comes from the Taylor expansion of the functions under scrutiny. I am considering the 6th order derivative scheme given by the formulae-

$$
f^{1}_i = (-f_{i-3} + 9 f_{i-2} - 45 f_{i-1} + 45 f_{i+1} - 9 f_{i+2} + f_{i+3})/(60 \delta x)
$$

$$
f^{2}_i = (2f_{i-3} -27 f_{i-2} + 270f_{i-1} - 490f_{i} + 270f_{i+1} - 27f_{i+2} + 2f_{i+3})/(180\delta x^2)
$$ 
`` {cite}`Brandenburg:2001wi` ``

### Runge Kutta Method (RK4)
The Runge-Kutta method is a widely used numerical technique for solving initial-value problems of differential equations without the need for high-order derivatives of functions. The RK4 method, or the fourth-order Runge-Kutta method, is one of the most commonly used Runge-Kutta methods for solving differential equations. 

We can generalized the RK4 solution to $n$-coupled first order ODE as-

$$
\left.\begin{array}{rl}
\frac{d y_1}{d x} & =f_1\left(y_1, y_2, \ldots, y_n, x\right) \\
\frac{d y_2}{d x} & =f_2\left(y_1, y_2, \ldots, y_n, x\right) \\
& \vdots \\
\frac{d y_n}{d x} & =f_n\left(y_1, y_2, \ldots, y_n, x\right)
\end{array}\right\} \Rightarrow \frac{d \vec{y}}{d x}=\vec{f}(\vec{y}, x)
$$

where $\vec{y}=\left(y_1, y_2, \ldots, y_n\right)$ and $\vec{f}=\left(f_1, f_2, \ldots, f_n\right)$. The vector sign simply implies collection variables. In such case the RK4 equations take the forms,

$$
\begin{aligned}
\vec{\kappa}_1 & =h \vec{f}\left(\vec{y}_i, x_i\right) \\
\vec{\kappa}_2 & =h \vec{f}\left(\vec{y}_i+\vec{\kappa}_1 / 2, x_i+h / 2\right) \\
\vec{\kappa}_3 & =h \vec{f}\left(\vec{y}_i+\vec{\kappa}_2 / 2, x_i+h / 2\right) \\
\vec{\kappa}_4 & =h \vec{f}\left(\vec{y}_i+\vec{\kappa}_3, x_i+h\right) \\
\vec{y}_{i+h} & =\vec{y}_i+\frac{1}{6}\left[\vec{\kappa}_1+2 \vec{\kappa}_2+2 \vec{\kappa}_3+\vec{\kappa}_4\right]
\end{aligned}
$$

where $\vec{y}_i$ are the values at the $i$-th interval boundary. 

The codes for the same can be accessed on: [github](https://github.com/UpasanaaD/Plasma-Physics-MHD)
