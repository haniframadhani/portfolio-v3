<script setup lang="ts">
  const value = `# Hello World
  ## h2
  ### h3
  #### h4
  ##### h5
  ###### h6

::badge
**v4.0.0**
::

![Image](/images/blog.jpg)

Learn more about the **MDC** component in the [documentation](https://github.com/nuxt-modules/mdc).
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mi massa, posuere a mauris sed, pellentesque hendrerit enim. Morbi enim lectus, maximus at nisi at, hendrerit consequat tortor. Donec massa purus, viverra sit amet dolor sit amet, sodales porttitor augue. Mauris maximus arcu lectus, id volutpat nulla accumsan sit amet. Fusce ac feugiat est. Pellentesque dapibus dignissim orci a blandit. Donec dapibus risus mauris. Ut imperdiet arcu sit amet augue lobortis ultrices. Fusce placerat blandit turpis, eget tempus purus fringilla vel. Vivamus imperdiet egestas turpis, eu tempor nisl cursus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam erat, bibendum quis velit sed, dictum venenatis ex.
![Image](/images/project.jpg)

In quis ex convallis, faucibus neque a, pulvinar mi. Pellentesque eleifend sit amet metus sed gravida. Nam id orci sollicitudin, mattis velit vel, ornare lacus. Quisque in suscipit odio. In ut sagittis nibh, eget sagittis ante. Cras enim leo, lacinia mattis nisl sit amet, convallis laoreet lacus. Quisque quam neque, dignissim at arcu nec, tristique lacinia felis. Nam consectetur vehicula massa, non commodo sem varius a. Vivamus in libero blandit, faucibus arcu vitae, aliquet tellus.
![Image](/images/bg.webp)

Proin ac quam quis justo elementum consectetur. Donec ac suscipit ipsum. Quisque et velit ut tortor consectetur hendrerit. Cras euismod sapien sapien, ut eleifend ex luctus nec. Cras auctor iaculis lectus, ut convallis lectus ultricies at. Phasellus eleifend sit amet erat eu mattis. In eleifend fringilla dolor eu faucibus. Vestibulum ut mauris ac mi accumsan lobortis. Sed volutpat arcu a neque malesuada, at faucibus massa porttitor. Suspendisse dignissim ante a enim placerat, et aliquet dui hendrerit. Suspendisse pellentesque massa in dolor sollicitudin interdum. Fusce pharetra dui sagittis, tristique lorem non, vulputate libero. Nullam tincidunt quam sed ipsum accumsan ultrices. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed dui nisl, tincidunt a dui a, commodo interdum ante.

Phasellus lacinia vulputate lectus id consectetur. Curabitur imperdiet nibh vitae nibh bibendum, eu gravida orci euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi fringilla vel urna quis rhoncus. Suspendisse leo nisl, laoreet at quam imperdiet, ornare faucibus dolor. Integer eu tincidunt nulla, eget dapibus lorem. Cras ut elit id eros dapibus lobortis. Donec blandit metus in eleifend efficitur. Duis facilisis turpis et dolor ornare convallis. Sed diam dolor, condimentum in cursus et, condimentum dictum orci. Integer aliquam ante quis odio feugiat condimentum. Mauris posuere orci augue, a vestibulum libero gravida a. Morbi varius justo in orci efficitur aliquam. Aliquam vestibulum vitae enim scelerisque convallis. Vestibulum eget lobortis ligula.

Mauris arcu est, posuere vel lorem a, porta aliquam orci. Vivamus fringilla sit amet tortor a fringilla. Quisque eu condimentum felis. Mauris luctus risus eu nibh dictum imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet lectus nec dolor scelerisque pellentesque non at tellus. Nullam aliquam dui a felis pulvinar elementum. Ut faucibus cursus purus id gravida. Etiam aliquet metus non neque interdum consequat. Ut in dapibus nisl, at sagittis felis. Phasellus vitae nulla nec augue molestie sagittis. Donec in sem vitae enim pharetra suscipit ac quis ligula. Phasellus non vulputate diam. Mauris nec eros nunc. Praesent a vestibulum tortor. Donec elementum risus ac tellus lacinia tincidunt.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eYAd4uDotF0?si=dz24MZX8U7iH1IxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
</script>
<template>
  <UContainer>
    <MDC :value="value" />
  </UContainer>
</template>
