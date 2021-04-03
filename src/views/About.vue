<template>
  <div class="about">
    <section class="about__bubble education">
      <div >
        <div
          class="about__bubble_text"
          v-tilt="{max: 10, perspective: 900, glare:true, 'max-glare': .5, reverse: true}"
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos illo laborum recusandae repellat.
            Aliquid consequatur pariatur repellendus saepe ullam voluptatibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos illo laborum recusandae repellat.
            Aliquid consequatur pariatur repellendus saepe ullam voluptatibus.
          </p>
        </div>
      </div>
    </section>
    <section class="about__bubble profession">
      <div>
        <div
          class="about__bubble_text"
          v-tilt="{max: 10, perspective: 900, glare:true, 'max-glare': .5, reverse: true}"
        >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          At explicabo optio quisquam? Aliquid consequuntur doloremque, fuga molestias mollitia omnis suscipit?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dignissimos illo laborum recusandae repellat.
          Aliquid consequatur pariatur repellendus saepe ullam voluptatibus.
        </p>
      </div>
      </div>
    </section>
    <section class="about__bubble story">
        <div>
          <div
            class="about__bubble_text"
            v-tilt="{max: 10, perspective: 900, glare:true, 'max-glare': .5, reverse: true}"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ab animi aperiam aut earum fugiat laborum maiores perspiciatis quo reiciendis unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ab animi aperiam aut earum fugiat laborum maiores perspiciatis quo reiciendis unde.
            </p>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
@import "../assets/style/style";
@import "../assets/style/mixins";
@import "../assets/style/variables";

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: #fff;

  &__bubble {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;

    &_text {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 400px;
      margin: auto 100px auto 1200px;
      padding: 5px;
      border-radius: 10px;
      border-top: 1px solid rgba(#fff, .5);
      border-left: 1px solid rgba(#fff, .5);
      background: rgba(#000, .1);
      text-align: left;
      font-size: 24px;
      font-weight: 400;
      box-shadow: 20px 20px 50px rgba(#000, .5);
      backdrop-filter: blur(5px);
      @include breakpoint($tablet-bp) {
        margin: 0;
        font-size: 26px;
        width: 100%;
        align-items: flex-end;
      }

      @include breakpoint($small-mobile-bp) {
        padding: 0;
        font-size: 18px;
      }

      & p {
        padding: 20px;
        color: #fff;
        pointer-events: none;
        @include breakpoint($tablet-bp) {
          padding: 0;
        }

        @include breakpoint($small-mobile-bp) {
          padding: 5px;
        }
      }
    }
  }
}

.education {
  background: url("../assets/images/2k/repo.jpg") center no-repeat;
  background-size: cover;
}

.story {
  background: url("../assets/images/2k/official.jpg") center no-repeat;
  background-size: cover;
}
.profession {
  background: url("../assets/images/2k/portrait.jpg") center no-repeat;
  background-size: cover;
  justify-content: flex-start;
  @include breakpoint($tablet-bp) {
    justify-content: center;
  }

  & .about__bubble_text {
    margin: 0 100px;
    @include breakpoint($tablet-bp) {
      margin: 0;
    }
  }
}
</style>
