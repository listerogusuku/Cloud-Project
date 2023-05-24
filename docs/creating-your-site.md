
## O que é e para que serve a AWS?

![AWS](./screenshots/aws.png)



>A Amazon Web Services (AWS) é a plataforma de nuvem **mais adotada e mais abrangente do mundo**, oferecendo mais de **200 serviços completos de datacenters em todo o mundo.** Milhões de clientes, incluindo as startups que crescem mais rápido, as maiores empresas e os maiores órgãos governamentais, estão **usando a AWS para reduzir custos, ganhar agilidade e inovar mais rapidamente.** _(Texto extraído do site da AWS)_

A Amazon Web Services (AWS) é uma plataforma de computação em nuvem oferecida pela Amazon. Ela fornece uma ampla gama de serviços de **computação, armazenamento, banco de dados, análise, rede, inteligência artificial e aprendizado de máquina, entre outros.** A AWS é projetada para fornecer uma infraestrutura flexível, escalável e confiável para empresas de todos os tamanhos.

A infraestrutura da AWS é composta por uma **rede global de data centers localizados em diferentes regiões ao redor do mundo.** Esses data centers são conectados por uma rede de alta velocidade e são projetados para fornecer alta disponibilidade e tolerância a falhas. Cada data center é dividido em várias zonas de disponibilidade, que são espaços fisicamente separados, mas conectados por redes de baixa latência. Essa arquitetura ajuda a garantir a resiliência dos serviços e a reduzir o impacto de falhas de hardware ou interrupções de energia.

_O vídeo a seguir - disponibilizado e produzido pela própria AWS - explica um pouco melhor (e de forma mais visual) o que é a AWS._


<iframe width="454" height="254" src="https://www.youtube.com/embed/a9__D53WsUs" title="What is AWS? | Amazon Web Services" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## Alguns exemplos de uso da AWS

**1. Hospedagem de sites e aplicativos:** A AWS oferece serviços de hospedagem escaláveis e confiáveis para sites e aplicativos, permitindo que empresas de todos os tamanhos garantam que seus serviços estejam disponíveis para os usuários em todo o mundo.

**2. Armazenamento e backup de dados:** Empresas podem aproveitar os serviços de armazenamento da AWS para guardar seus dados de forma segura e escalável. A AWS oferece soluções como o Amazon S3 (Simple Storage Service) e o Amazon Glacier, que permitem armazenar e fazer backup de grandes quantidades de dados de forma econômica.

**3. Processamento e análise de Big Data:** Com os serviços de Big Data da AWS, como o Amazon EMR (Elastic MapReduce) e o Amazon Redshift, as empresas podem processar e analisar grandes conjuntos de dados de maneira eficiente e escalável, obtendo insights valiosos para tomada de decisões.

**4. Implantação de aplicativos móveis:** A AWS fornece serviços que ajudam no desenvolvimento, teste e implantação de aplicativos móveis. Através de serviços como o AWS Mobile Hub e o AWS Device Farm, os desenvolvedores podem criar e lançar aplicativos móveis de forma mais rápida e eficiente.

**5. Internet das Coisas (IoT):** Com a AWS IoT, é possível conectar dispositivos inteligentes à nuvem e realizar o gerenciamento, processamento e análise de dados gerados por esses dispositivos. Isso possibilita a criação de soluções inovadoras em setores como automação residencial, manufatura, saúde e agricultura.

**6. Machine Learning e Inteligência Artificial:** A AWS oferece uma variedade de serviços e ferramentas para implementação de modelos de Machine Learning e IA. Por exemplo, o Amazon SageMaker permite treinar, implantar e dimensionar modelos de Machine Learning de forma simplificada, enquanto o Amazon Rekognition permite adicionar recursos de visão computacional a aplicativos.

Ainda não ficou claro a importância do uso da AWS? Então vamos contextulizar um pouco!

## A AWS no dia-a-dia das corporações

### **AWS no Comércio Eletrônico:**
![MAGALU](./screenshots/magalu.png)

Imagine que a **Magazine Luiza** precisa hospedar seu site e lidar com **picos de tráfego durante grandes eventos de venda,** como a **Black Friday.** Eles optam por utilizar a AWS para hospedar sua infraestrutura de TI. Com os serviços de escalabilidade automática da AWS, a empresa pode **aumentar a capacidade de servidores e recursos computacionais conforme a demanda, garantindo que seu site permaneça disponível mesmo durante períodos de tráfego intenso.**

Além disso, a empresa utiliza serviços de armazenamento da AWS, como o Amazon S3, para armazenar imagens e descrições de produtos, enquanto o Amazon RDS (Relational Database Service) é utilizado para gerenciar seu banco de dados central. Dessa forma, eles têm um armazenamento seguro e escalável para atender às necessidades do negócio.

### **AWS em uma startup de energia:**

![LISTER ENERGY](./screenshots/LISTER_ENERGY.png)

Considere que a startup de energia **Lister Energy** está desenvolvendo uma plataforma de **análise de dados em tempo real** para monitorar e otimizar o consumo de energia em edifícios comerciais. A empresa coleta **grandes volumes de dados** de sensores instalados nos edifícios e **precisa processá-los de forma rápida e eficiente.**

Nesse caso, a startup aproveita os **serviços de Big Data da AWS.** Eles utilizam o Amazon Kinesis para ingestão e processamento de dados em tempo real, permitindo que os dados dos sensores sejam **transmitidos e analisados em tempo real.** Em seguida, eles utilizam o Amazon EMR para realizar **análises mais complexas e gerar insights valiosos sobre o consumo de energia.** Com a escalabilidade oferecida pela AWS, a startup pode lidar facilmente com o aumento no volume de dados à medida que adquire mais clientes.

### **AWS em uma empresa de segurança cibernética:**
![CYBER AVELINUX](./screenshots/CYBER_AVELINUX.png)
Vamos imaginar que a empresa de segurança cibernética **Cyber Avelinux** _(Avelino, pode falar, curtiu né? hahaha)_ fornece soluções de detecção de ameaças para organizações. Eles desenvolveram um **modelo de Machine Learning para identificar comportamentos suspeitos em tempo real,** a fim de proteger seus clientes contra ataques cibernéticos.

A empresa utiliza o Amazon SageMaker, um serviço de Machine Learning da AWS, para **treinar e implantar seu modelo.** Eles aproveitam a capacidade de escalabilidade do SageMaker para **processar grandes volumes de dados de logs de segurança em tempo real, identificando padrões e comportamentos anormais.** Com isso, a empresa consegue fornecer uma solução de segurança eficaz e adaptável às necessidades em constante evolução de seus clientes.

Essas histórias exemplificam algumas das necessidades de uso da AWS na vida real e como as empresas podem aproveitar os serviços da plataforma para atender a diferentes demandas e desafios específicos de cada setor.


Agora que você já conheceu melhor a AWS e sua utilidade, bora utilizar seu primeiro serviço de computação em nuvem?

<!-- After you've [installed] Material for MkDocs, you can bootstrap your project 
documentation using the `mkdocs` executable. Go to the directory where you want
your project to be located and enter:

```
mkdocs new .
```

Alternatively, if you're running Material for MkDocs from within Docker, use:

=== "Unix, Powershell"

    ```
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
    ```

=== "Windows"

    ```
    docker run --rm -it -v "%cd%":/docs squidfunk/mkdocs-material new .
    ```

This will create the following structure:

``` { .sh .no-copy }
.
├─ docs/
│  └─ index.md
└─ mkdocs.yml
```

  [installed]: getting-started.md

## Configuration

### Minimal configuration

Simply add the following lines to `mkdocs.yml` to enable the theme:

``` yaml
theme:
  name: material
```

  [installation methods]: getting-started.md#installation

???+ tip "Recommended: [configuration validation and auto-complete]"

    In order to minimize friction and maximize productivity, Material for MkDocs 
    provides its own [schema.json][^1] for `mkdocs.yml`. If your editor supports
    YAML schema validation, it's definitely recommended to set it up:

    === "Visual Studio Code"

        1.  Install [`vscode-yaml`][vscode-yaml] for YAML language support.
        2.  Add the schema under the `yaml.schemas` key in your user or
            workspace [`settings.json`][settings.json]:

            ``` json
            {
              "yaml.schemas": {
                "https://squidfunk.github.io/mkdocs-material/schema.json": "mkdocs.yml"
              },
              "yaml.customTags": [ // (1)!
                "!ENV scalar",
                "!ENV sequence",
                "tag:yaml.org,2002:python/name:materialx.emoji.to_svg",
                "tag:yaml.org,2002:python/name:materialx.emoji.twemoji",
                "tag:yaml.org,2002:python/name:pymdownx.superfences.fence_code_format"
              ]
            }
            ```

            1.  This setting is necessary if you plan to use [icons and emojis],
                or Visual Studio Code will show errors on certain lines.

    === "Other"

        1.  Ensure your editor of choice has support for YAML schema validation.
        2.  Add the following lines at the top of `mkdocs.yml`:

            ``` yaml
            # yaml-language-server: $schema=https://squidfunk.github.io/mkdocs-material/schema.json
            ```

  [^1]:
    If you're a MkDocs plugin or Markdown extension author and your project
    works with Material for MkDocs, you're very much invited to contribute a
    schema for your [extension] or [plugin] as part of a pull request on GitHub.
    If you already have a schema defined, or wish to self-host your schema to
    reduce duplication, you can add it via [$ref].

  [configuration validation and auto-complete]: https://twitter.com/squidfunk/status/1487746003692400642
  [schema.json]: schema.json
  [vscode-yaml]: https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml
  [settings.json]: https://code.visualstudio.com/docs/getstarted/settings
  [extension]: https://github.com/squidfunk/mkdocs-material/tree/master/docs/schema/extensions
  [plugin]: https://github.com/squidfunk/mkdocs-material/tree/master/docs/schema/plugins
  [$ref]: https://json-schema.org/understanding-json-schema/structuring.html#ref
  [icons and emojis]: reference/icons-emojis.md

### Advanced configuration

Material for MkDocs comes with many configuration options. The setup section
explains in great detail how to configure and customize colors, fonts, icons
and much more:

<div class="mdx-columns" markdown>

- [Changing the colors]
- [Changing the fonts]
- [Changing the language]
- [Changing the logo and icons]
- [Ensuring data privacy]
- [Setting up navigation]
- [Setting up site search]
- [Setting up site analytics]
- [Setting up social cards]
- [Setting up a blog]
- [Setting up tags]
- [Setting up versioning]
- [Setting up the header]
- [Setting up the footer]
- [Adding a git repository]
- [Adding a comment system]
- [Building an optimized site]
- [Building for offline usage]

</div>

Furthermore, see the list of supported [Markdown extensions] that are natively
integrated with Material for MkDocs, delivering an unprecedented low-effort
technical writing experience.

  [Changing the colors]: setup/changing-the-colors.md
  [Changing the fonts]: setup/changing-the-fonts.md
  [Changing the language]: setup/changing-the-language.md
  [Changing the logo and icons]: setup/changing-the-logo-and-icons.md
  [Ensuring data privacy]: setup/ensuring-data-privacy.md
  [Setting up navigation]: setup/setting-up-navigation.md
  [Setting up site search]: setup/setting-up-site-search.md
  [Setting up site analytics]: setup/setting-up-site-analytics.md
  [Setting up social cards]: setup/setting-up-social-cards.md
  [Setting up a blog]: setup/setting-up-a-blog.md
  [Setting up tags]: setup/setting-up-tags.md
  [Setting up versioning]: setup/setting-up-versioning.md
  [Setting up the header]: setup/setting-up-the-header.md
  [Setting up the footer]: setup/setting-up-the-footer.md
  [Adding a git repository]: setup/adding-a-git-repository.md
  [Adding a comment system]: setup/adding-a-comment-system.md
  [Building for offline usage]: setup/building-for-offline-usage.md
  [Building an optimized site]: setup/building-an-optimized-site.md
  [Markdown extensions]: setup/extensions/index.md

## Previewing as you write

MkDocs includes a live preview server, so you can preview your changes as you
write your documentation. The server will automatically rebuild the site upon
saving. Start it with:

``` sh
mkdocs serve # (1)!
```

1.  If you have a large documentation project, it might take minutes until
    MkDocs has rebuilt all pages for you to preview. If you're only interested
    in the current page, the [`--dirtyreload`][--dirtyreload] flag will make
    rebuilds much faster:

    ```
    mkdocs serve --dirtyreload
    ```

If you're running Material for MkDocs from within Docker, use:

=== "Unix, Powershell"

    ```
    docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
    ```

=== "Windows"

    ```
    docker run --rm -it -p 8000:8000 -v "%cd%":/docs squidfunk/mkdocs-material
    ```

Point your browser to [localhost:8000][live preview] and you should see:

[![Creating your site]][Creating your site]

  [--dirtyreload]: https://www.mkdocs.org/about/release-notes/#support-for-dirty-builds-990
  [live preview]: http://localhost:8000
  [Creating your site]: assets/screenshots/creating-your-site.png

## Building your site

When you're finished editing, you can build a static site from your Markdown
files with:

```
mkdocs build
```

If you're running Material for MkDocs from within Docker, use:

=== "Unix, Powershell"

    ```
    docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material build
    ```

=== "Windows"

    ```
    docker run --rm -it -v "%cd%":/docs squidfunk/mkdocs-material build
    ```

The contents of this directory make up your project documentation. There's no
need for operating a database or server, as it is completely self-contained.
The site can be hosted on [GitHub Pages], [GitLab Pages], a CDN of your choice
or your private web space.

  [GitHub Pages]: publishing-your-site.md#github-pages
  [GitLab pages]: publishing-your-site.md#gitlab-pages -->
