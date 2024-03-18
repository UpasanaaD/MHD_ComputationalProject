# Introduction

## Galactic Magnetic Fields

Galactic magnetic fields play a crucial role in the interstellar medium of galaxies. They are significant in spiral, barred, irregular, and dwarf galaxies. Efforts to model large-scale Galactic magnetic fields are ongoing and important for various astronomical studies. These magnetic fields are believed to be amplified and sustained by dynamo action, particularly through the **$$ \alpha − \Omega $$** mean-field mechanism. In the first Galactic quadrant near the Sagittarius spiral arm, complex large-scale magnetic fields have been observed, including field reversals that are still not fully characterized. Observations of galactic and intergalactic magnetic fields have been conducted using various tools across different wavelengths, with theoretical concepts also being explored in this context.

This project aims at modelling large-scale magnetic fields. The mean field dynamo equation is given by-

$$
\frac{\partial \bar{B}}{\partial t}=\nabla \times(\bar{V} \times \bar{B}+\mathcal{E}-\eta \nabla \times \bar{B}) .
$$



## Numerical Approaches 

Many challenges in hydrodynamics and magnetohydrodynamics can be simplified to solving sets of interconnected first-order partial differential equations. If faced with a second-order ordinary differential equation, it's possible to decompose it into two linked first-order partial differential equations and then address them individually. Specifically, if an initial solution for the magnetic field across all spatial points is provided, it's necessary to advance this solution over time to track the magnetic field's evolution. As the spatial domain is finite (represented by a mesh or grid), appropriate boundary conditions are provided. While analytical methods are sometimes feasible, they are often subject to various approximations, prompting the utilization of numerical approaches. One such method is the Eulerian approach, which employs finite difference, finite volume, or finite element techniques for spatial derivatives.

This method calculates spatial derivatives of the variable at each point on the mesh, and these derivatives are subsequently utilized in the differential equation during the time-stepping process. The accuracy of a scheme is determined by its order, which signifies its precision relative to the resolution size ($$\delta x$$). Higher-order schemes necessitate more computational steps compared to lower-order counterparts. Alternatively, achieving higher accuracy can be accomplished by utilizing finer grid resolutions (smaller $$\delta x$$). However, it's inefficient to employ a resolution higher than what's necessary. The resolution must be sufficient to capture the gradients governing the dynamics, such as pressure gradients, to avoid numerical instabilities. We will be using the **finite difference method** here.

Time-stepping is essentially a method to advance the equations forward in time. A commonly used technique for this purpose is known as **Runge-Kutta methods**. These methods can vary in order, corresponding to accuracy up to certain powers of the timestep ($$\del x$$).



